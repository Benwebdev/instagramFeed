export const instagramFetch = (url, setFeeds, setisLoaded) => {
    fetch(url).then((r1) => {
        return r1.json();
    }).then((d2) => {
        setFeeds(d2.data);
        setisLoaded(true);
    })
}