export async function GET() {
  return Response.json({
    status: 'online',
    lastTrade: new Date().toISOString(),
    performance: '+2.5%',
    tradesToday: 12
  })
}
