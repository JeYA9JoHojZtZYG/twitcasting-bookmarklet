(()=> {
    let getFraction = () => parseInt(document.querySelector('.tw-fraction').textContent.split('/')[0]);
    let oldFraction = getFraction();
    let newFraction;
    let intervalId = setInterval(() => {
        newFraction = getFraction();
        if (newFraction > oldFraction) {
        new Notification(newFraction + '名様いらっしゃい');
        }
        oldFraction = newFraction;
    }, 2000);
    console.log('Interval ID = ' + intervalId);
})();
