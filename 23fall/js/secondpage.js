// by Mengyao Chen 2023/12/14
function createImageContainers() {
    var container = document.getElementById("imagecontainer2");
    var imageCount = 103;
    var imagePath = "image/whole/img";
    var textArray = [
        "1954 Beijing Exhibition Center",
        "1954 Great Hall of the People (Chongqing)",
        "1954 Xi 'an People's Building",
        "1954 Xi 'an People's Theatre",
        "1955 Shanghai Exhibition Center",
        "1957 Guangzhou Municipal People's Government Building",
        "1957 Tianjin Concert Hall",
        "1958 Monument to the People's Heroes",
        "1959 Beijing Workers Stadium",
        "1959 Gansu Provincial Museum",
        "1959 Great Hall Of The People",
        "1959 Zhongnanhai Ziguang Pavilion",
        "1963 National Art Museum of China",
        "1965 Xi'an Newspaper Building",
        "1968 Nanjing Yangtze River Bridge bridgehead",
        "1974 beijinghotel",
        "1975 Nanjing Wutaishan Gymnasium",
        "1975 Shanghai Stadium",
        "1976 Mao Zedong Memorial Hall",
        "1983 White Swan Hotel",
        "1984 Beijing Great Wall Sheraton Hotel",
        "1984 Chinese Theater",
        "1984 Wuhan Museum",
        "1985 Qingdao Seaside Garden Hotel",
        "1985 Shenzhen International Trade Center Building",
        "1985 Shenzhen stadium",
        "1986 Central Color Television Center",
        "1987 beijing international hotel",
        "1987 Chinese People's Anti-Japanese War Memorial Hall",
        "1987 Fuzhou museum",
        "1987 New Beijing Library",
        "1988 Shenzhen Museum",
        "1989 Liaoning Radio and TV Tower",
        "1991 Beijing Liangma River Hotel",
        "1991 Lianhua village",
        "1991 Shenzhen Railway Station",
        "1991 Sunshine hotel",
        "1992 baixiang Village",
        "1992 Zhejiang University",
        "1993 Yangpu Bridge",
        "1993 China International Exhibition Center",
        "1994 Great Wall Museum of China",
        "1994 Shanghai oriental pearl tower",
        "1994 Tianjin Science and Technology Museum",
        "1994 Window of the World",
        "1995 Shantou Bay Bridge",
        "1996 Shanghai museum",
        "1997 Daisy Financial Center",
        "1997 Guangsha Holdings Group",
        "1997 Shanghai Youth Activity Center",
        "1997 Shenzhen Ping An Bank Building",
        "1998 Shanghai grand theatre",
        "1999 ForeignLanguage Teaching and Research Press",
        "1999 Nie Rongzhen Memorial",
        "2000 Beijing New World Center",
        "2000 Metro Plaza",
        "2000 Shanghai Urban Planning Exhibition Center",
        "2000 Shenyang fangyuan building",
        "2000 Shenzhen nanguo mall",
        "2002 China Import and Export Complex",
        "2003 Wenzhou Grand Theater",
        "2006 China Fujian-Taiwan Margin Museum",
        "2006 New Suzhou Museum",
        "2006 New Poly Plaza",
        "2007 China Academy of Art",
        "2007 Guangzhou Baiyun International Convention Center",
        "2007 Minsheng Bank Building",
        "2007 National Centre for the Performing Arts (China)",
        "2007 national library",
        "2008 Beijing National Stadium",
        "2008 Jiayuguan City Museum",
        "2008 Zifeng Tower",
        "2009 Museum of Chinese Characters",
        "2009 Tianjin Planning Exhibition Hall",
        "2009 Wuhan station (the landmark of mengyao's love story)",
        "2010 Canton Tower",
        "2010 China Pavilion of Expo",
        "2010 Guangzhou IFC",
        "2010 Wenzhou World Trade Cente",
        "2011 Kingkey Finance Tower",
        "2012 CCTV Headquarters",
        "2012 Galaxy SOHO",
        "2012 Shanghai Himalayas Museum",
        "2012 The Ring Of Life",
        "2013 Sheraton Huzhou Hotel",
        "2015 Harbin Grand Theatre",
        "2016 shanghai Tower",
        "2017 Captain's House",
        "2017 Chaoyang park plaza",
        "2018 China International Design Museum",
        "2018 Morpheus (hotel)",
        "2019 Beijing Daxing International Airport",
        "2019 DJI Sky City",
        "2019 Leeza SOHO",
        "2019 Raffles City Chongqing",
        "2021 1000 Trees",
        "2021 Haikou Yundong Library",
        "2021 Jingdezhen Royal Kiln Museum",
        "2021 Theice ribbon-The national speed skating oval",
        "2022 Chongqing-Gaoke-Group-Ltd-Office",
        "2022 Hangzhou West Railway Station",
        "2023 Ordos smart sports park",
        "2023 Quzhou stadium"
    ];
    for (var i = 1; i <= imageCount; i++) {
        var imageUrl = imagePath + i + ".jpg";
        var imageContainer = document.createElement("div");
        imageContainer.className = "simagecontainer";
        var noteContainer = createNoteContainer(imageUrl, i,textArray[i -1]);
        imageContainer.addEventListener("mouseover", createMouseOverHandler(noteContainer));
        imageContainer.addEventListener("mouseout", createMouseOutHandler(noteContainer));
        var imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = "Image " + i;
        imageElement.style.maxHeight = "5vh";

        if (i >= 1 && i <= 16) {
            imageContainer.style.position = 'absolute';
            imageContainer.style.left = `${(Math.random() * 8 +3)}%`;
            imageContainer.style.bottom = `${90 - (i * 4.5)}%`;
        } else if (i >= 17 && i <= 57) {
            imageContainer.style.position = 'absolute';
            imageContainer.style.left = `${ ((i - 16) * 2)+5}%`;
            imageContainer.style.bottom = `${2 + (Math.random() * 15 + 5)}%`;
        } else if (i >= 58 && i <= 103) {
            imageContainer.style.position = 'absolute';
            imageContainer.style.right = `${(Math.random() * 10 + 5)}%`;
            imageContainer.style.bottom = `${8 + (i - 58) * 1.8}%`;
        }

        imageContainer.appendChild(imageElement);
        container.appendChild(imageContainer);
    }
}
function createNoteContainer(imageUrl, imageNumber, title) {
    var noteContainer = document.createElement("div");
    noteContainer.className = "notecontainer";
    noteContainer.style.position = 'fixed';
    noteContainer.style.top = '40%';
    noteContainer.style.left = '50%';
    noteContainer.style.transform = 'translate(-50%, -50%)';
    noteContainer.style.padding = '0.4em';
    noteContainer.style.borderRadius = '0.4em';
    noteContainer.style.opacity = 0;
    noteContainer.innerHTML = `<img src="${imageUrl}" alt="Image ${imageNumber}"><p>${title}</p>`;

    document.body.appendChild(noteContainer);

    return noteContainer;
}

function createMouseOverHandler(noteContainer) {
    return function() {
        console.log('Mouse over');
        noteContainer.style.opacity = 1;
    };
}

function createMouseOutHandler(noteContainer) {
    return function() {
        console.log('Mouse out');
        noteContainer.style.opacity = 0;
    };
}
document.addEventListener('DOMContentLoaded', function() {
    var reloadButton = document.getElementById('reload-button');
    reloadButton.addEventListener('click', function() {
        var container = document.getElementById("imagecontainer2");
        container.innerHTML = '';
        createImageContainers();
    });
});

document.addEventListener("DOMContentLoaded", createImageContainers);
