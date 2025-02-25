function renderTopicCards(value, key, map) {
    const div = document.createElement("div");
    div.classList = 'cardrow';
    const h2 = document.createElement("h2");
    h2.textContent = key;
    const ul = document.createElement("ul");
    value.toSorted((a, b) => 0.5 - Math.random()).slice(0, 5).forEach((member) => {
        //    value.slice(0, 5).forEach((member) => {
        renderCard(member, ul)
    });
    div.appendChild(h2);
    div.appendChild(ul);
    document.getElementById("cardList").appendChild(div);
}

function renderCard(card, parentList) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute('src', 'https://picsum.photos/seed/' + encodeURIComponent(card.topic + card.subtopic + card.title) + '/192/90');
    img.setAttribute('alt', 'Oppgave: ' + card.title);
    li.appendChild(img);
    const crumb = document.createElement("span");
    crumb.classList = 'breadcrumb';
    crumb.textContent = card.topic + ' > '+ card.subtopic;
    li.appendChild(crumb);
    const legend = document.createElement("span");
    legend.classList = 'title';
    legend.textContent = card.title;
    li.appendChild(legend);
    li.onclick = function () { showContentPane(card.title, card.topic, card.subtopic, card.instruction) };
    parentList.appendChild(li);
}

function renderReset() {
    resetView();
    const div = document.createElement("div");
    div.classList = 'cardrow recent';
    const h2 = document.createElement("h2");
    h2.textContent = 'Siste';
    div.appendChild(h2);
    const ul = document.createElement("ul");
    cards.filter((c) => c.isrecent).forEach((c) => renderCard(c, ul));
    div.appendChild(ul);
    document.getElementById("cardList").appendChild(div);
    Map.groupBy(cards, (c) => c.topic).forEach(renderTopicCards);
    document.getElementById('filterReset').className = 'selected';
}

function renderFiltered(filter) {
    resetView();
    Map.groupBy(cards.filter((c) => c.topic == filter), ((c) => c.subtopic)).forEach(renderTopicCards);
    document.getElementById('filter' + filter).className = 'selected';
}

function renderFilters() {
    Map.groupBy(cards, (c) => c.topic).forEach((value, key) => {
        const button = document.createElement("button");
        button.type = 'button';
        button.textContent = key;
        button.id = 'filter' + key;
        button.onclick = function () { renderFiltered(key) };
        document.getElementById("filterList").appendChild(button);
    });
}

function showContentPane(title, topic, subtopic, instruction) {
    const mask = document.createElement("div");
    mask.id = "modalmask";
    const content = document.createElement("div");
    content.id = "modalcontent";
    const heading = document.createElement("h3");
    heading.textContent = title;
    content.appendChild(heading);
    const breadcrumb = document.createElement("p");
    breadcrumb.classList = "breadcrumb";
    breadcrumb.textContent = topic + ' > ' + subtopic;
    content.appendChild(breadcrumb);
    const img = document.createElement("img");
    img.setAttribute('src', 'https://picsum.photos/seed/' + encodeURIComponent(topic + subtopic + title) + '/778/360');
    img.setAttribute('alt', 'Illustrasjion til oppgave: ' + title);
    content.appendChild(img);
    if (instruction) {
        const exercise = document.createElement("p");
        exercise.classList = "exercise";
        exercise.textContent = instruction;
        content.appendChild(exercise);
    }
    mask.appendChild(content);
    mask.onclick = function (event) {
        if (event.target == document.getElementById("modalmask")) {
            mask.parentElement.removeChild(mask);
        }
    };
    document.getElementById("main").appendChild(mask);
}

function resetView() {
    document.getElementById('cardList').replaceChildren();
    document.querySelector('button.selected').className = '';
}

renderFilters();
renderReset();
