let currentSettings = {
  isActive: false,
  dailyTradeLimit: 1000,
  broker: '',
  account: ''
}

export async function POST(request) {
  try {
    const newSettings = await request.json()
    currentSettings = { ...currentSettings, ...newSettings }
    return Response.json(currentSettings)
  } catch (error) {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}

export async function GET() {
  return Response.json(currentSettings)
}
