import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const assetsDir = join(dist, 'assets')
const imagesDir = join(dist, 'images')

const [indexHtml, assetFiles, imageFiles] = await Promise.all([
  readFile(join(dist, 'index.html'), 'utf8'),
  readdir(assetsDir),
  readdir(imagesDir),
])

const buildMatch = indexHtml.match(/saragungar build: ([0-9T:.Z-]+)/)
const cssFile = assetFiles.find((name) => name.endsWith('.css'))
const jsFile = assetFiles.find((name) => name.startsWith('index-') && name.endsWith('.js'))
const distStat = await stat(dist)

console.log('')
console.log('=== Deploy-koll för saragungar.se ===')
console.log('')
console.log(`Byggtid:     ${buildMatch?.[1] ?? 'okänd'}`)
console.log(`CSS på live: /assets/${cssFile}`)
console.log(`JS på live:  /assets/${jsFile}`)
console.log(`Bilder:      ${imageFiles.length} filer i dist/images/`)
console.log('')
console.log('Ladda upp HELA innehållet i dist/ till public_html på Simply:')
console.log('  - index.html (ersätt den gamla)')
console.log('  - mappen assets/ (alla filer)')
console.log('  - mappen images/ (alla filer)')
console.log('')
console.log('Verifiera lokalt FÖRE uppladdning:')
console.log('  npm run preview')
console.log('  → öppna http://localhost:4173')
console.log('  → det ska se ut EXAKT som live efter uppladdning')
console.log('')
console.log('Verifiera EFTER uppladdning på saragungar.se:')
console.log('  1. Högerklicka → Visa sidkälla')
console.log(`  2. Leta efter: saragungar build: ${buildMatch?.[1] ?? ''}`)
console.log(`  3. Leta efter: /assets/${cssFile}`)
console.log('  4. Cmd+Shift+R (hård refresh)')
console.log('')
