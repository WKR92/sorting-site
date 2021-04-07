import channels from '../channels.js';

// imperial notation:
const putCommasBetweenNumbers = (number) => {
    return number
        .split(/(?=(?:\d{3})+$)/).join(",")
}

// info needed for channels in object for better readability
export const channelsValues = channels.map(elem => ({
    "title": elem.title,
    "thumbnail": elem.thumbnails.medium.url,
    'numOfSubscribers': elem.statistics.subscriberCount.replace(/[,|.|\s]/gi, ""),
    'numOfVideos': elem.statistics.videoCount.replace(/[,|.|\s]/gi, ""),
    'numOfViews': elem.statistics.viewCount.replace(/[,|.|\s]/gi, ""),
    'channelUrl': elem.customUrl
}))

// channel component:
const listOfChannels = (arr) => {return arr.map(elem => `
    <a class="channel" id==${elem.title} href=${elem.channelUrl + '?utm_date=' + Date.now()} target="_blank">
        <div class="channel__thumbnailAndTitle">
            <img class="thumbnailAndTitle__thumbnail" alt=${elem.title} src=${elem.thumbnail} />
            <h4 class="thumbnailAndTitle__title">${elem.title}</h4>
        </div>
        <div class="channel__info">
            <div class="info__subscribers">
                <div class="infoContainer">
                    <p class="infoTitle">SUBSCRIBERS</p>
                    <p class="infoNumber">${putCommasBetweenNumbers(elem.numOfSubscribers)}</p>
                </div>
            </div>
            <div class="info__videos">
                <div class="infoContainer">
                    <p class="infoTitle">VIDEOS</p>
                    <p class="infoNumber">${putCommasBetweenNumbers(elem.numOfVideos)}</p>
                </div>
            </div>
            <div class="info__views">
                <div class="infoContainer">
                    <p class="infoTitle">VIEWS</p>
                    <p class="infoNumber">${putCommasBetweenNumbers(elem.numOfViews)}</p>
                </div>
            </div>
        </div>
    </a>`
)}

export default listOfChannels;