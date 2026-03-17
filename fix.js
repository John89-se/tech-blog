const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'content');

const dateMap = {
  '2026-03-05': '2026-02-17',
  '2026-03-04': '2026-02-16',
  '2026-03-03': '2026-02-15',
  '2026-03-02': '2026-02-14',
  '2026-03-01': '2026-02-13',
  '2026-02-28': '2026-02-12',
  '2026-02-27': '2026-02-11',
  '2026-02-26': '2026-02-10',
  '2026-02-25': '2026-02-09',
  '2026-02-24': '2026-02-08',
  '2026-02-23': '2026-02-07',
  '2026-02-22': '2026-02-06',
  '2026-02-21': '2026-02-05',
  '2026-02-20': '2026-02-04',
  '2026-02-19': '2026-02-03',
  '2026-02-18': '2026-02-02'
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [oldDate, newDate] of Object.entries(dateMap)) {
    if (content.includes('date: "' + oldDate + '"')) {
      content = content.replace('date: "' + oldDate + '"', 'date: "' + newDate + '"');
    }
  }

  content = content.replace(/^#\s+.*$/gm, '');

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Fixed dates and removed H1 successfully.');
