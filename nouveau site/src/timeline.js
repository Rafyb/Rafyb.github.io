function loadTimeline(id)
{
    let json = scene.cache.json.get(id);
    return `<div class="timeline">
        <ul>
            ${loadList(json.timeline)}
        </ul>
    </div>`
}

function loadList(times) {
    let list = '';
    times.forEach(time => {
        list += `<li>
        <div>
        <div class="title">${time.title}</div>
        <div class="info">${time.info}</div>
        <div class="utils">`;
        
        time.utils.forEach(label => {
            list+=`<a class="${label.class}" href="${label.link}">${label.text}</a>`;
        });

        list+= `</div>
        <div class="img"><a href="${time.img.link}"><img src="${time.img.src}"></a></div>
        <div class="type">${time.desc}</div>
        </div> <span class="number"><span>${time.dateFirst}</span> <span>${time.dateSecond}</span></span>
        </li>`;
    });
    return list;
}