# Steam-library-stats-export
This script extracts key information from your Steam library page — including:

- 🎮 Game name  
- ⏱️ Playtime  
- 🏆 Achievements (e.g., `595/640`)  
- 🕒 Last played date  

## ✅ What it does

It scrapes your Steam library overview and generates a CSV-formatted string like:
"Название","Время","Достижения","Последний запуск"
"The Binding of Isaac: Rebirth","1 293,4 ч.","595/640","21 июл."


## 📦 How to use

1. Open your Steam library page (in browser).
2. Ensure all games are visible (scroll down if needed).
3. Open Developer Console (`F12` or `Ctrl+Shift+J` → Console tab).
4. Paste and run the script from `steam-stats.js`.
5. Copy the CSV result from console.

## 🛠️ Notes

- This script depends on current Steam DOM structure — may break if the layout changes.
- The UI class names (`._2-pQFn1G7dZ7667rrakcU3` etc.) are obfuscated and may vary.
- Supports achievements, but only if they're shown on the main library tile.

## 📃 License

MIT — feel free to fork, modify, or contribute.
