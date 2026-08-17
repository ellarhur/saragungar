import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const assetsDir = join(dist, 'assets')

const [indexHtml, assetFiles] = await Promise.all([
  readFile(join(dist, 'index.html'), 'utf8'),
  readdir(assetsDir),
])

const buildMatch = indexHtml.match(/saragungar build: ([0-9T:.Z-]+)/)
const assetStats = await Promise.all(
  assetFiles.map(async (name) => {
    const fileStat = await stat(join(assetsDir, name))
    return { name, bytes: fileStat.size }
  }),
)

const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`

console.log('')
console.log('=== Deploy-koll för saragungar.se ===')
console.log('')
console.log(`Byggtid: ${buildMatch?.[1] ?? 'okänd'}`)
console.log('')
console.log('Filer som ska ligga i public_html/assets/:')
for (const { name, bytes } of assetStats.sort((a, b) => a.name.localeCompare(b.name))) {
  console.log(`  ${name.padEnd(28)} ${formatKb(bytes)}`)
}
console.log('')
console.log('Uppladdning till public_html/:')
console.log('  index.html')
console.log('  assets/  (alla filer ovan)')
console.log('  images/  (hela mappen)')
console.log('')
console.log('Kontroll i webbläsaren på saragungar.se:')
console.log('  1. Öppna Utvecklarverktyg → Nätverk (Network)')
console.log('  2. Ladda om sidan (Cmd+Shift+R)')
console.log('  3. Kontrollera att varje fil har rätt storlek:')
for (const { name, bytes } of assetStats) {
  console.log(`     ${name} → ca ${formatKb(bytes)} (status 200)`)
}
console.log('  4. Om en .js-fil är några KB eller "text/html" → ladda upp assets/ igen')
console.log('')
console.log('Jämför rätt:')
console.log('  localhost:4173 (npm run preview) och saragungar.se')
console.log('  → samma webbläsare, samma fönsterbredd, zoom 100 % (Cmd+0)')
console.log('  → mobil: testa preview på mobilen med npm run preview:live')
console.log('')
