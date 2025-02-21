const cards = [
    {
        title: "Lek med verb",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'Finn fem verb i en bok.'
    },
    {
        title: "Lek med substantiver",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'Se rundt deg, finn fem substantiver, og bøy dem.'
    },
    {
        title: "Lek med adjektiver",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'Lag en adjektivfortelling i klassen.'
    },
    {
        title: "Lek med determinativ",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'En, ei, et'
    },
    {
        title: "Finn verbene",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'Hva driver du med?'
    },
    {
        title: "Hva er et verb?",
        topic: "Norsk",
        subtopic: "Grammatikk",
        instruction: 'Et verb beskriver en handling.'
    },
    {
        title: "Ibsen",
        topic: "Norsk",
        subtopic: "Litteratur",
        instruction: 'Henrik Ibsen levde fra 1828 til 1906.'
    },
    {
        title: "Kielland",
        topic: "Norsk",
        subtopic: "Litteratur",
        instruction: 'Husker du Kielland-ulykken?'
    },
    {
        title: "Bjørnson",
        topic: "Norsk",
        subtopic: "Litteratur",
        instruction: 'Bjørnstjerne Bjørnson bodde på Aulestad. Reis dit.'
    },
    {
        title: "Lie",
        topic: "Norsk",
        subtopic: "Litteratur",
        instruction: 'Rekk opp hånden hvis du har lest så mye som et punktum av Jonas Lie!'
    },
    {
        title: "Kvinnelige forfattere",
        topic: "Norsk",
        subtopic: "Litteratur",
        instruction: 'Noen forfattere er kvinner. De er ikke like anerkjente som mennene, selv om de kan være vel så dyktige. Synd for dem!'
    },
    {
        title: "De tunge årene",
        topic: "Historie",
        subtopic: "Norsk historie",
        instruction: 'Mange gamle har opplevd krigen. Lag en podcast der du intervjuer en gammel.'
    },
    {
        title: "De glade 60-årene",
        topic: "Historie",
        subtopic: "Norsk historie",
        instruction: 'Hipp hurra!'
    },
    {
        title: 'Legg sammen',
        topic: 'Matematikk',
        subtopic: 'Algebra',
        instruction: 'Hvor mye er to pluss to?'
    },
    {
        title: 'Trekk fra',
        topic: 'Matematikk',
        subtopic: 'Algebra',
        instruction: 'Per har fem epler, men mister tre. Hvor mange epler har han nå?'
    },
    {
        title: 'Gange',
        topic: 'Matematikk',
        subtopic: 'Algebra',
        instruction: 'Hvor mye er 3 ganger 8?'
    },
    {
        title: 'Dele',
        topic: 'Matematikk',
        subtopic: 'Algebra',
        instruction: 'Hvor mye er 24 delt på 3?'

    },
    {
        title: 'Nøtteoppgave',
        topic: 'Matematikk',
        subtopic: 'Algebra',
        instruction: 'Hvor mye er uendelig?'
    },
    {
        title: 'Vinkler i trekanter',
        topic: 'Matematikk',
        subtopic: 'Trigonometri',
        instruction: 'Hva er summen av vinklene i en trekant?'
    },
    {
        title: 'Sinus',
        topic: 'Matematikk',
        subtopic: 'Trigonometri',
        instruction: 'Regn med sinus'
    },
    {
        title: 'Cosinus',
        topic: 'Matematikk',
        subtopic: 'Trigonometri',
        instruction: 'Regn med cosinus'
    },
    {
        title: 'Tangens',
        topic: 'Matematikk',
        subtopic: 'Trigonometri',
        instruction: 'Regn med tangens'
    },
    {
        title: 'Likesidede trekanter',
        topic: 'Matematikk',
        subtopic: 'Trigonometri',
        instruction: 'Tegn en likesidet trekant i kladdeboka di.'
    },
    {
        title: 'Addisjon med små tall',
        topic: 'Matematikk',
        subtopic: 'Pluss',
        instruction: 'Hvor mye er 1 + 1?'
    },
    {
        title: 'Addisjon med store tall',
        topic: 'Matematikk',
        subtopic: 'Pluss',
        instruction: 'Hvor mye er 1234 + 4321?'
    },
    {
        title: 'Addisjon med kjempestore tall',
        topic: 'Matematikk',
        subtopic: 'Pluss',
        instruction: 'Hvor mye er en million pluss en milliard?'
    },
    {
        title: 'Nøtteoppgave',
        topic: 'Matematikk',
        subtopic: 'Pluss',
        instruction: 'Hvor mange ganger kan du plusse før du dør?'
    },
    {
        title: 'Låne',
        topic: 'Matematikk',
        subtopic: 'Minus',
        instruction: 'Hva er 13 - 7?'
    },
    {
        title: 'Oppsett i rutenett',
        topic: 'Matematikk',
        subtopic: 'Minus',
        instruction: 'Sett opp i rutenett: 13 - 7'
    },
    {
        title: 'Nøtteoppgave',
        topic: 'Matematikk',
        subtopic: 'Minus',
        instruction: 'Kan tall være mindre enn null?'
    },
    {
        title: 'Ekte brøk',
        topic: 'Matematikk',
        subtopic: 'Brøk',
        instruction: 'Hva er en ekte brøk?'
    },
    {
        title: 'Uekte brøk',
        topic: 'Matematikk',
        subtopic: 'Brøk',
        instruction: 'Hvorfor er 7/5 en uekte brøk?'
    },
    {
        title: 'Minste fellesnevner',
        topic: 'Matematikk',
        subtopic: 'Brøk',
        instruction: 'Legg sammen 1/2 og 3/4'
    },
    {
        title: 'Utro brøk',
        topic: 'Matematikk',
        subtopic: 'Brøk',
        instruction: 'Hvis brøken har slemme tanker, kan de hende den er utro.'
    },
    {
        title: 'Bråk - brøk på svensk',
        topic: 'Matematikk',
        subtopic: 'Brøk',
        instruction: 'Vi reiser på studietur til Stockholm!'
    },
    {
        title: 'Potetprester',
        topic: 'Historie',
        subtopic: 'Opplysningstiden',
        instruction: 'Skriv et essay om potetprester'
    },
    {
        title: 'Den franske revolusjon',
        topic: 'Historie',
        subtopic: 'Opplysningstiden',
        instruction: '1789'
    },
    {
        title: 'Renhold og hygiene',
        topic: 'Historie',
        subtopic: 'Opplysningstiden',
        instruction: 'Hvorfor må man vaske hendene etter å ha vært på do?'
    },
    {
        title: 'Religionens fall',
        topic: 'Historie',
        subtopic: 'Opplysningstiden',
        instruction: 'Hvis gud er død, hvem skal vi tro på da?'
    },
    {
        title: 'Opplysningen 180',
        topic: 'Historie',
        subtopic: 'Opplysningstiden',
        instruction: 'Les mer på 1881.no'
    }
];

