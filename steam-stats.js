const gameCards = document.querySelectorAll('div._2-pQFn1G7dZ7667rrakcU3');
let result = 'Название,Время,Достижения,Последний запуск\n';

gameCards.forEach(card => {
    // Extract game title
    const nameEl = card.querySelector('a._22awlPiAoaZjQMqxJhp-KP');
    const name = nameEl ? `"${nameEl.textContent.trim()}"` : '"Без названия"';

    // Extract playtime
    const timeEl = card.querySelector('span._26nl3MClDebGDV7duYjZVn');
    const time = timeEl ? `"${timeEl.childNodes[1].textContent.trim()}"` : '"—"';

    // Extract last played date
    const lastLaunchEl = card.querySelector('span._2jglu-fYE_XNY6tkn6J99Y');
    const lastLaunch = lastLaunchEl ? `"${lastLaunchEl.childNodes[1].textContent.trim()}"` : '"—"';

    // Extract achievements (e.g., "595/640")
    let achievements = '"—"';
    const achievementsLink = card.querySelector('a._3eZMLQT-bjZ0EhBSvQlDQ0[href*="achievements"]');
    if (achievementsLink) {
        const achievementsSpan = achievementsLink.parentElement.querySelector('span._1YRRMk6X7vrOL-02K-q1pf');
        if (achievementsSpan) {
            achievements = `"${achievementsSpan.textContent.trim()}"`;
        }
    }

    result += `${name},${time},${achievements},${lastLaunch}\n`;
});

console.log(result);
