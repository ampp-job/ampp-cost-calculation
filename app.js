
const TARIFFS = [{"city":"Азов","hourly6":161,"peak6":5.59,"hourly8":128,"peak8":4.47,"norm":67,"division":"Южный"},{"city":"Анапа","hourly6":188,"peak6":6.54,"hourly8":150,"peak8":5.23,"norm":67,"division":"Южный"},{"city":"Армавир","hourly6":180,"peak6":6.28,"hourly8":240,"peak8":3.59,"norm":67,"division":"Южный"},{"city":"Архангельск","hourly6":167,"peak6":5.83,"hourly8":146,"peak8":5.07,"norm":67,"division":"Приволжский"},{"city":"Астрахань","hourly6":168,"peak6":5.85,"hourly8":134,"peak8":4.68,"norm":67,"division":"Южный"},{"city":"Барнаул","hourly6":171,"peak6":5.95,"hourly8":159,"peak8":4.42,"norm":67,"division":"Восточный"},{"city":"Батайск","hourly6":293,"peak6":4.37,"hourly8":234,"peak8":3.5,"norm":67,"division":"Южный"},{"city":"Белгород","hourly6":186,"peak6":6.47,"hourly8":173,"peak8":4.8,"norm":67,"division":"Южный"},{"city":"Березники","hourly6":126,"peak6":4.37,"hourly8":100,"peak8":3.5,"norm":67,"division":"Приволжский"},{"city":"Березовский","hourly6":154,"peak6":5.35,"hourly8":123,"peak8":4.28,"norm":67,"division":"Восточный"},{"city":"Бийск","hourly6":146,"peak6":5.08,"hourly8":156,"peak8":3.49,"norm":67,"division":"Восточный"},{"city":"Благовещенск","hourly6":199,"peak6":6.92,"hourly8":212,"peak8":4.74,"norm":67,"division":"Восточный"},{"city":"Брянск","hourly6":189,"peak6":6.58,"hourly8":151,"peak8":5.27,"norm":67,"division":"Москва"},{"city":"Великий Новгород","hourly6":148,"peak6":6.65,"hourly8":190,"peak8":4.25,"norm":67,"division":"Северо-Западный"},{"city":"Владивосток","hourly6":333,"peak6":6.08,"hourly8":171,"peak8":5.95,"norm":67,"division":"Восточный"},{"city":"Владикавказ","hourly6":158,"peak6":5.49,"hourly8":147,"peak8":4.08,"norm":67,"division":"Южный"},{"city":"Владимир","hourly6":179,"peak6":6.22,"hourly8":143,"peak8":4.97,"norm":67,"division":"Москва"},{"city":"Волгоград","hourly6":161,"peak6":5.59,"hourly8":193,"peak8":3.52,"norm":67,"division":"Южный"},{"city":"Вологда","hourly6":152,"peak6":6.81,"hourly8":146,"peak8":5.08,"norm":67,"division":"Приволжский"},{"city":"Воронеж","hourly6":185,"peak6":6.44,"hourly8":197,"peak8":4.42,"norm":67,"division":"Южный"},{"city":"Воскресенск","hourly6":206,"peak6":7.16,"hourly8":165,"peak8":5.73,"norm":67,"division":"Москва"},{"city":"Грозный","hourly6":159,"peak6":5.53,"hourly8":148,"peak8":4.11,"norm":67,"division":"Южный"},{"city":"Дзержинск","hourly6":166,"peak6":5.78,"hourly8":133,"peak8":4.62,"norm":67,"division":"Приволжский"},{"city":"Дмитров","hourly6":261,"peak6":7.23,"hourly8":213,"peak8":4.76,"norm":67,"division":"Москва"},{"city":"Дубна","hourly6":236,"peak6":8.23,"hourly8":189,"peak8":6.58,"norm":67,"division":"Москва"},{"city":"Екатеринбург","hourly6":215,"peak6":7.48,"hourly8":165,"peak8":5.75,"norm":67,"division":"Восточный"},{"city":"Ессентуки","hourly6":184,"peak6":6.39,"hourly8":147,"peak8":5.12,"norm":67,"division":"Южный"},{"city":"Иваново","hourly6":182,"peak6":6.34,"hourly8":146,"peak8":5.07,"norm":67,"division":"Приволжский"},{"city":"Ижевск","hourly6":185,"peak6":6.45,"hourly8":148,"peak8":5.16,"norm":67,"division":"Приволжский"},{"city":"Иркутск","hourly6":182,"peak6":6.35,"hourly8":210,"peak8":3.84,"norm":67,"division":"Восточный"},{"city":"Йошкар-Ола","hourly6":158,"peak6":5.51,"hourly8":169,"peak8":3.78,"norm":67,"division":"Приволжский"},{"city":"Казань","hourly6":344,"peak6":5.14,"hourly8":229,"peak8":4.19,"norm":67,"division":"Приволжский"},{"city":"Калуга","hourly6":173,"peak6":6.02,"hourly8":138,"peak8":4.82,"norm":67,"division":"Москва"},{"city":"Каспийск","hourly6":140,"peak6":4.88,"hourly8":149,"peak8":3.34,"norm":67,"division":"Южный"},{"city":"Кемерово","hourly6":184,"peak6":6.39,"hourly8":196,"peak8":4.38,"norm":67,"division":"Восточный"},{"city":"Киров","hourly6":138,"peak6":4.82,"hourly8":148,"peak8":3.31,"norm":67,"division":"Приволжский"},{"city":"Кисловодск","hourly6":204,"peak6":7.12,"hourly8":164,"peak8":5.69,"norm":67,"division":"Южный"},{"city":"Клин","hourly6":252,"peak6":8.78,"hourly8":202,"peak8":7.02,"norm":67,"division":"Москва"},{"city":"Ковров","hourly6":183,"peak6":6.37,"hourly8":146,"peak8":5.09,"norm":67,"division":"Москва"},{"city":"Коломна","hourly6":202,"peak6":7.03,"hourly8":162,"peak8":5.63,"norm":67,"division":"Москва"},{"city":"Комсомольск-на-Амуре","hourly6":179,"peak6":6.24,"hourly8":143,"peak8":4.99,"norm":67,"division":"Восточный"},{"city":"Кострома","hourly6":183,"peak6":6.37,"hourly8":195,"peak8":4.37,"norm":67,"division":"Приволжский"},{"city":"Краснодар","hourly6":180,"peak6":6.28,"hourly8":216,"peak8":3.95,"norm":67,"division":"Южный"},{"city":"Красноярск","hourly6":206,"peak6":7.19,"hourly8":248,"peak8":4.52,"norm":67,"division":"Восточный"},{"city":"Курган","hourly6":150,"peak6":5.23,"hourly8":120,"peak8":4.18,"norm":67,"division":"Восточный"},{"city":"Курск","hourly6":163,"peak6":5.67,"hourly8":195,"peak8":3.56,"norm":67,"division":"Южный"},{"city":"Липецк","hourly6":158,"peak6":5.49,"hourly8":189,"peak8":3.45,"norm":67,"division":"Южный"},{"city":"Магнитогорск","hourly6":250,"peak6":3.73,"hourly8":160,"peak8":3.58,"norm":67,"division":"Восточный"},{"city":"Майкоп","hourly6":158,"peak6":5.5,"hourly8":126,"peak8":4.4,"norm":67,"division":"Южный"},{"city":"Махачкала","hourly6":176,"peak6":6.12,"hourly8":187,"peak8":4.19,"norm":67,"division":"Южный"},{"city":"Миасс","hourly6":210,"peak6":7.3,"hourly8":168,"peak8":5.84,"norm":67,"division":"Южный"},{"city":"Минеральные Воды","hourly6":175,"peak6":6.1,"hourly8":210,"peak8":3.83,"norm":67,"division":"Южный"},{"city":"Москва","hourly6":350,"peak6":5.22,"hourly8":252,"peak8":4.6,"norm":67,"division":"Москва"},{"city":"Набережные Челны","hourly6":166,"peak6":5.79,"hourly8":133,"peak8":4.63,"norm":67,"division":"Приволжский"},{"city":"Нальчик","hourly6":165,"peak6":5.76,"hourly8":132,"peak8":4.61,"norm":67,"division":"Южный"},{"city":"Нефтеюганск","hourly6":184,"peak6":6.4,"hourly8":147,"peak8":5.12,"norm":67,"division":"Восточный"},{"city":"Нижневартовск","hourly6":206,"peak6":7.19,"hourly8":248,"peak8":4.52,"norm":67,"division":"Восточный"},{"city":"Нижний Новгород","hourly6":253,"peak6":5.66,"hourly8":158,"peak8":5.5,"norm":67,"division":"Приволжский"},{"city":"Нижний Тагил","hourly6":162,"peak6":5.64,"hourly8":135,"peak8":4.7,"norm":67,"division":"Восточный"},{"city":"Новокузнецк","hourly6":285,"peak6":4.25,"hourly8":186,"peak8":3.53,"norm":67,"division":"Восточный"},{"city":"Новомосковск","hourly6":177,"peak6":6.17,"hourly8":142,"peak8":4.94,"norm":67,"division":"Москва"},{"city":"Новороссийск","hourly6":202,"peak6":7.02,"hourly8":161,"peak8":5.62,"norm":67,"division":"Южный"},{"city":"Новосибирск","hourly6":305,"peak6":4.55,"hourly8":254,"peak8":3.79,"norm":67,"division":"Восточный"},{"city":"Новочеркасск","hourly6":178,"peak6":6.19,"hourly8":142,"peak8":4.95,"norm":67,"division":"Южный"},{"city":"Обнинск","hourly6":203,"peak6":7.06,"hourly8":162,"peak8":5.65,"norm":67,"division":"Москва"},{"city":"Омск","hourly6":239,"peak6":5.36,"hourly8":156,"peak8":5.43,"norm":67,"division":"Восточный"},{"city":"Орел","hourly6":181,"peak6":6.31,"hourly8":145,"peak8":5.05,"norm":67,"division":"Москва"},{"city":"Пенза","hourly6":169,"peak6":5.89,"hourly8":225,"peak8":3.36,"norm":67,"division":"Приволжский"},{"city":"Пермь","hourly6":181,"peak6":6.32,"hourly8":242,"peak8":3.61,"norm":67,"division":"Приволжский"},{"city":"Петрозаводск","hourly6":201,"peak6":6.99,"hourly8":241,"peak8":4.4,"norm":67,"division":"Северо-Западный"},{"city":"Псков","hourly6":163,"peak6":5.67,"hourly8":130,"peak8":4.54,"norm":67,"division":"Северо-Западный"},{"city":"Пятигорск","hourly6":193,"peak6":6.72,"hourly8":180,"peak8":4.99,"norm":67,"division":"Южный"},{"city":"Ростов-на-Дону","hourly6":213,"peak6":7.41,"hourly8":170,"peak8":5.93,"norm":67,"division":"Южный"},{"city":"Рязань","hourly6":183,"peak6":6.36,"hourly8":146,"peak8":5.09,"norm":67,"division":"Москва"},{"city":"Самара","hourly6":215,"peak6":7.48,"hourly8":172,"peak8":5.99,"norm":67,"division":"Приволжский"},{"city":"Санкт-Петербург","hourly6":203,"peak6":7.05,"hourly8":162,"peak8":5.64,"norm":67,"division":"Северо-Западный"},{"city":"Саранск","hourly6":148,"peak6":5.14,"hourly8":118,"peak8":4.11,"norm":67,"division":"Приволжский"},{"city":"Саратов","hourly6":158,"peak6":5.5,"hourly8":126,"peak8":4.4,"norm":67,"division":"Приволжский"},{"city":"Серпухов","hourly6":174,"peak6":6.05,"hourly8":139,"peak8":4.84,"norm":67,"division":"Москва"},{"city":"Смоленск","hourly6":174,"peak6":6.07,"hourly8":139,"peak8":4.85,"norm":67,"division":"Москва"},{"city":"Солнечногорск","hourly6":243,"peak6":8.47,"hourly8":195,"peak8":6.77,"norm":67,"division":"Москва"},{"city":"Сочи","hourly6":214,"peak6":7.46,"hourly8":171,"peak8":5.96,"norm":67,"division":"Южный"},{"city":"Ставрополь","hourly6":163,"peak6":5.68,"hourly8":174,"peak8":3.9,"norm":67,"division":"Южный"},{"city":"Старый Оскол","hourly6":158,"peak6":5.49,"hourly8":168,"peak8":3.76,"norm":67,"division":"Южный"},{"city":"Стерлитамак","hourly6":176,"peak6":6.14,"hourly8":141,"peak8":4.91,"norm":67,"division":"Приволжский"},{"city":"Ступино","hourly6":235,"peak6":8.17,"hourly8":188,"peak8":6.54,"norm":67,"division":"Москва"},{"city":"Сургут","hourly6":206,"peak6":7.19,"hourly8":165,"peak8":5.75,"norm":67,"division":"Восточный"},{"city":"Сыктывкар","hourly6":167,"peak6":5.8,"hourly8":133,"peak8":4.64,"norm":67,"division":"Восточный"},{"city":"Таганрог","hourly6":197,"peak6":6.85,"hourly8":236,"peak8":4.31,"norm":67,"division":"Южный"},{"city":"Тамбов","hourly6":137,"peak6":4.78,"hourly8":165,"peak8":3,"norm":67,"division":"Южный"},{"city":"Тверь","hourly6":193,"peak6":6.73,"hourly8":155,"peak8":5.39,"norm":67,"division":"Москва"},{"city":"Тольятти","hourly6":179,"peak6":6.23,"hourly8":167,"peak8":4.63,"norm":67,"division":"Приволжский"},{"city":"Томск","hourly6":325,"peak6":4.85,"hourly8":218,"peak8":4.5,"norm":67,"division":"Восточный"},{"city":"Тула","hourly6":203,"peak6":7.07,"hourly8":162,"peak8":5.65,"norm":67,"division":"Москва"},{"city":"Тюмень","hourly6":197,"peak6":6.87,"hourly8":237,"peak8":4.32,"norm":67,"division":"Восточный"},{"city":"Улан-Удэ","hourly6":157,"peak6":5.48,"hourly8":210,"peak8":3.13,"norm":67,"division":"Восточный"},{"city":"Ульяновск","hourly6":165,"peak6":5.75,"hourly8":132,"peak8":4.6,"norm":67,"division":"Приволжский"},{"city":"Уссурийск","hourly6":233,"peak6":8.12,"hourly8":186,"peak8":6.49,"norm":67,"division":"Восточный"},{"city":"Уфа","hourly6":180,"peak6":6.29,"hourly8":144,"peak8":5.03,"norm":67,"division":"Приволжский"},{"city":"Хабаровск","hourly6":331,"peak6":6.05,"hourly8":170,"peak8":5.92,"norm":67,"division":"Восточный"},{"city":"Ханты-Мансийск","hourly6":206,"peak6":7.17,"hourly8":220,"peak8":4.92,"norm":67,"division":"Восточный"},{"city":"Чайковский","hourly6":181,"peak6":6.31,"hourly8":145,"peak8":5.05,"norm":67,"division":"Приволжский"},{"city":"Чебоксары","hourly6":162,"peak6":5.63,"hourly8":172,"peak8":3.86,"norm":67,"division":"Приволжский"},{"city":"Челябинск","hourly6":254,"peak6":3.79,"hourly8":212,"peak8":3.16,"norm":67,"division":"Восточный"},{"city":"Череповец","hourly6":174,"peak6":6.06,"hourly8":209,"peak8":3.81,"norm":67,"division":"Приволжский"},{"city":"Черкесск","hourly6":165,"peak6":5.76,"hourly8":132,"peak8":4.61,"norm":67,"division":"Южный"},{"city":"Чита","hourly6":142,"peak6":4.95,"hourly8":159,"peak8":3.28,"norm":67,"division":"Восточный"},{"city":"Шахты","hourly6":177,"peak6":6.15,"hourly8":141,"peak8":4.92,"norm":67,"division":"Южный"},{"city":"Элиста","hourly6":142,"peak6":4.94,"hourly8":113,"peak8":3.95,"norm":67,"division":"Южный"},{"city":"Энгельс","hourly6":222,"peak6":4.96,"hourly8":133,"peak8":4.63,"norm":67,"division":"Приволжский"},{"city":"Ярославль","hourly6":178,"peak6":6.21,"hourly8":190,"peak8":4.26,"norm":67,"division":"Приволжский"}];

const SHIFT_MAP = {
  6: 5.5,
  7: 6.5,
  8: 7.5,
  9: 8,
  10: 8.75,
  11: 9.75,
  12: 10.75
};

const state = {
  city: localStorage.getItem('ampp_city') || 'Москва',
  shift: Number(localStorage.getItem('ampp_shift') || 8),
  operations: Number(localStorage.getItem('ampp_operations') || 100)
};

const byId = (id) => document.getElementById(id);
const money = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 2
});
const number = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 });

function getTariff(city) {
  return TARIFFS.find(x => x.city === city);
}

function calculate(city, shift, operations) {
  const t = getTariff(city);
  const realHours = SHIFT_MAP[shift];
  if (!t || !realHours || !Number.isFinite(operations) || operations < 0) return null;

  const shortTariff = shift === 6;
  const hourly = shortTariff ? t.hourly6 : t.hourly8;
  const peak = shortTariff ? t.peak6 : t.peak8;

  const total = hourly * realHours + peak * operations;
  const performer = total * 0.65;
  const agency = total * 0.35;
  const productivity = operations / (realHours * t.norm);
  const perOperation = operations > 0 ? total / operations : 0;

  return { t, realHours, hourly, peak, total, performer, agency, productivity, perOperation };
}

function fillCities() {
  const select = byId('city');
  select.innerHTML = TARIFFS.map(t =>
    `<option value="${escapeHtml(t.city)}">${escapeHtml(t.city)}</option>`
  ).join('');
  if (!getTariff(state.city)) state.city = TARIFFS[0].city;
  select.value = state.city;
}

function update() {
  state.city = byId('city').value;
  state.shift = Number(byId('shift').value);
  state.operations = Number(byId('operations').value || 0);

  localStorage.setItem('ampp_city', state.city);
  localStorage.setItem('ampp_shift', state.shift);
  localStorage.setItem('ampp_operations', state.operations);

  const r = calculate(state.city, state.shift, state.operations);
  if (!r) return;

  byId('real-hours').textContent = `${number.format(r.realHours)} ч`;
  byId('tariff-kind').textContent = state.shift === 6 ? 'Тариф 6 часов' : 'Тариф 8 часов';
  byId('productivity').textContent = `${number.format(r.productivity * 100)}%`;
  byId('performer').textContent = money.format(r.performer);
  byId('agency').textContent = money.format(r.agency);
  byId('total').textContent = money.format(r.total);
  byId('per-operation').textContent = money.format(r.perOperation);
  byId('division').textContent = r.t.division || '—';
  byId('rate-details').textContent =
    `ЧТС ${number.format(r.hourly)} ₽ · пик ${number.format(r.peak)} ₽ · норма ${number.format(r.t.norm)} пик/ч`;

  const status = byId('status');
  if (state.operations === 0) {
    status.className = 'notice neutral';
    status.textContent = 'Введите количество операций — результаты пересчитаются автоматически.';
  } else if (r.productivity < 0.8) {
    status.className = 'notice warn';
    status.textContent = 'Низкая загрузка смены: производительность ниже 80%.';
  } else if (r.productivity > 1.5) {
    status.className = 'notice good';
    status.textContent = 'Высокая производительность: свыше 150%.';
  } else {
    status.className = 'notice good';
    status.textContent = 'Расчет выполнен.';
  }
}

function renderTariffs(filter = '') {
  const q = filter.trim().toLowerCase();
  const list = TARIFFS.filter(t =>
    t.city.toLowerCase().includes(q) || (t.division || '').toLowerCase().includes(q)
  );
  byId('tariff-list').innerHTML = list.map(t => `
    <article class="tariff-row">
      <div>
        <strong>${escapeHtml(t.city)}</strong>
        <small>${escapeHtml(t.division || '')}</small>
      </div>
      <div class="tariff-values">
        <span>6 ч: ${number.format(t.hourly6)} ₽/ч + ${number.format(t.peak6)} ₽/пик</span>
        <span>8 ч: ${number.format(t.hourly8)} ₽/ч + ${number.format(t.peak8)} ₽/пик</span>
      </div>
    </article>
  `).join('') || '<p class="empty">Ничего не найдено.</p>';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function showTab(name) {
  document.querySelectorAll('.screen').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(x => x.classList.remove('active'));
  byId(`screen-${name}`).classList.add('active');
  document.querySelector(`[data-tab="${name}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  fillCities();
  byId('shift').value = state.shift;
  byId('operations').value = state.operations;

  ['city', 'shift', 'operations'].forEach(id => {
    byId(id).addEventListener(id === 'operations' ? 'input' : 'change', update);
  });

  document.querySelectorAll('.nav-btn').forEach(btn =>
    btn.addEventListener('click', () => showTab(btn.dataset.tab))
  );

  byId('tariff-search').addEventListener('input', e => renderTariffs(e.target.value));
  byId('reset').addEventListener('click', () => {
    localStorage.clear();
    state.city = 'Москва';
    state.shift = 8;
    state.operations = 100;
    fillCities();
    byId('shift').value = state.shift;
    byId('operations').value = state.operations;
    update();
  });

  renderTariffs();
  update();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
