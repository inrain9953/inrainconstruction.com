import CallButtonPress from './lib/callSchema'
import WhatsappClick from './lib/whatsappSchema'
import { connectToDatabase } from './lib/db'

const MAX_PAGE_SIZE = 100

function getPositiveInteger (value, fallback) {
  const parsed = Number.parseInt(value, 10)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await connectToDatabase()
    const limit = Math.min(
      getPositiveInteger(req.query.limit, MAX_PAGE_SIZE),
      MAX_PAGE_SIZE
    )
    const callPage = getPositiveInteger(req.query.callPage, 1)
    const whatsappPage = getPositiveInteger(req.query.whatsappPage, 1)
    const [callTotal, whatsappTotal, Call, Whatsapp] = await Promise.all([
      CallButtonPress.countDocuments(),
      WhatsappClick.countDocuments(),
      CallButtonPress.find({})
        .sort({ clickedAt: -1, _id: -1 })
        .skip((callPage - 1) * limit)
        .limit(limit)
        .lean(),
      WhatsappClick.find({})
        .sort({ clickedAt: -1, _id: -1 })
        .skip((whatsappPage - 1) * limit)
        .limit(limit)
        .lean()
    ])

    return res.status(200).json({
      Call,
      Whatsapp,
      pagination: {
        Call: {
          page: callPage,
          limit,
          total: callTotal,
          totalPages: Math.ceil(callTotal / limit)
        },
        Whatsapp: {
          page: whatsappPage,
          limit,
          total: whatsappTotal,
          totalPages: Math.ceil(whatsappTotal / limit)
        }
      }
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}
