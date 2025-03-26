import { NextResponse } from 'next/server';

const GITHUB_OWNER = '0xZakk';
const GITHUB_REPO = 'ETHSDG';
const GITHUB_BRANCH = 'main';
const DIRECTORY = 'data';

export async function GET() {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DIRECTORY}?ref=${GITHUB_BRANCH}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  )

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
  }

  const files = await res.json();
  const combinedData = await Promise.all(
    files
      .map(async (file: any) => {
        const fileRes = await fetch(file.download_url);
        const content = await fileRes.text();
        return JSON.parse(content);
      })
  );

  return NextResponse.json(combinedData);
}
