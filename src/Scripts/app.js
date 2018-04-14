$(() => {
    $(document).on("click", "a", event => {
        const url = $(event.currentTarget).attr("href");
        if (!/www.youtube.com/.test(url)) {
            return;
        }
        window.open(url.replace(/www(.youtube.com)/, "gaming$1"));
        return false;
    });
})