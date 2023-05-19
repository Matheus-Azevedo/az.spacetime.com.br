import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/auth', { code })

  const { token } = registerResponse.data

  const redirectUrl = new URL('/', request.url)

  const cookieExpireInWeek = 60 * 60 * 24 * 7

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpireInWeek};`,
    },
  })
}
