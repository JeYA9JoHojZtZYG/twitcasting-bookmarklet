javascript:(new MutationObserver((recordList, self) => {
    let record = recordList.find(
	mutationRecord => mutationRecord.target.classList.contains(
	    "tw-timeup-timer--will-end-soon"));
    if (!!record) {
	new Notification("赤字です。");
    }
})).observe(
    document.querySelector(".tw-status-indicator"),
    {attributes: true}
);
