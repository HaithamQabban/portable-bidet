const track = document.querySelector('.slider_track');

document.querySelector(".prev").addEventListener("click", () => {
    track.scrollBy({ left: -track.clientWidth});

});

document.querySelector(".next").addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth});
})