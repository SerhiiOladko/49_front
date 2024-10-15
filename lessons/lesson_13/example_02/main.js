const JohnyDepp = {
    name: 'Johny',
    surname: 'Depp',
    age: 50,
    hobbies: ['cricket', 'bowling', 'fishing'],
    films: {
      year1999: ['Pirates1', 'Edward'],
      year2003: ['Pirates2', 'Pirates3'],
    },
    singing() {
      console.log('I am singing');
    },
  };
  
  JohnyDepp.singing();
  
  const RikkiMartinConcert24051998 = {
    city: 'Berlin',
    date: '1998-05-25 14:00',
    bilets: 8000,
    songs: ['La la', 'Da vida Loca'],
  };
  
  console.log(JohnyDepp.name);
  console.log(JohnyDepp['name']);
  
  // добавим вес
  JohnyDepp.weight = 70;
  console.log(JohnyDepp);
  
  // удалим возраси
  delete JohnyDepp.age;
  console.log(JohnyDepp);
  
  // проверяем есть ли свойство у обьекта
  const ifJohnyHas = 'weight' in JohnyDepp;
  console.log(ifJohnyHas);
  
  console.log(Object.hasOwn(JohnyDepp, 'weight'));
  
  // работа с обьектами
  // Получение списка ключей
  
  const keysForJohny = Object.keys(JohnyDepp);
  console.log(keysForJohny);
  
  // Получение списка значений
  const valuesForJohny = Object.values(JohnyDepp);
  console.log(valuesForJohny);
  
  // Классная работа: получить все фильмы Johny в одномерном массиве
  
  const filmValuesForJohny = Object.values(JohnyDepp.films);
  console.log(filmValuesForJohny);
  
  // .forEach
  const allFilms = [];
  filmValuesForJohny.forEach((filmsOfYear) => {
    allFilms.push(...filmsOfYear);
  });
  console.log(allFilms);
  
  // .flat
  const filmsOfJohny = filmValuesForJohny.flat();
  console.log(filmsOfJohny);
  
  
  
  // получение списка ключ значение
  console.log(Object.entries(JohnyDepp));
  