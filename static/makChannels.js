import channels from './channels.js';

const putCommm = (number) => {
    return number
        .replace(/[,|.|\s]/gi, "")
        .split(/(?=(?:\d{3})+$)/).join(",")
}

const listOfChannels = channels.map(elem => `
    <div class="channel">   
        <div class="channel__thumbnailAndTitle">
            <img class="thumbnailAndTitle__thumbnail" alt=${elem.title} src=${elem.thumbnails.medium.url} />
            <h4 class="thumbnailAndTitle__title">${elem.title}</h4>
        </div>
        <div class="channel__info">
            <div class="info__subscribers">
                <div class="infoContainer">
                    <p class="infoTitle">SUBSCRIBERS</p>
                    <p class="infoNumber">${putCommm(elem.statistics.subscriberCount)}</p>
                </div>
            </div>
            <div class="info__videos">
                <div class="infoContainer">
                    <p class="infoTitle">VIDEOS</p>
                    <p class="infoNumber">${putCommm(elem.statistics.videoCount)}</p>
                </div>
            </div>
            <div class="info__views">
                <div class="infoContainer">
                    <p class="infoTitle">VIEWS</p>
                    <p class="infoNumber">${putCommm(elem.statistics.viewCount)}</p>
                </div>
            </div>
        </div>
    </div>`
    )

export default listOfChannels;