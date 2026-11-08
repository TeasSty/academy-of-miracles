import { useState, type FormEvent } from 'react'
import {
  ACTS,
  CONTACTS,
  DISCO_LIST,
  ETHNO_LIST,
  EXTRA_CATEGORIES,
  HERO_IMAGE,
  HERO_LIST,
  PATHWAYS,
  RIDER,
  SHOW_LIST,
} from './data/catalog'
import './App.css'

function App() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      'Заявка с сайта Академия Чудес',
      `Имя: ${data.get('name') || '—'}`,
      `Телефон: ${data.get('phone') || '—'}`,
      `Дата: ${data.get('date') || '—'}`,
      `Возраст: ${data.get('age') || '—'}`,
      `Район: ${data.get('district') || '—'}`,
      `Программа: ${data.get('program') || '—'}`,
      `Комментарий: ${data.get('note') || '—'}`,
    ]
    const text = lines.join('\n')
    void navigator.clipboard?.writeText(text).catch(() => undefined)
    window.open(CONTACTS.vk, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div className="site">
      <header className="header">
        <div className="shell header__inner">
          <a className="brand" href="#top" aria-label="Академия Чудес — наверх">
            <img src="/logo.svg" alt="" width={42} height={42} />
            <span className="brand__text">
              <span className="brand__name">Академия Чудес</span>
              <span className="brand__place">Братск · праздники и аниматоры</span>
            </span>
          </a>
          <nav className="nav" aria-label="Разделы">
            <a href="#acts">Программы</a>
            <a href="#rider">Формат</a>
            <a href="#catalog">Каталог</a>
            <a href="#contact">Заявка</a>
          </nav>
          <div className="header__cta">
            <a className="btn btn--ghost" href={CONTACTS.phoneHref}>
              {CONTACTS.phoneDisplay}
            </a>
            <a className="btn btn--primary" href="#contact">
              Написать
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Главный экран">
          <div className="hero__stage" aria-hidden="true">
            <img
              className="hero__photo"
              src={HERO_IMAGE}
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </div>
          <div className="shell hero__content">
            <div className="hero__brand">
              <img src="/logo.svg" alt="" width={56} height={56} />
              <div className="hero__brand-name">Академия Чудес</div>
            </div>
            <p className="hero__lead">
              Выездные шоу и программы для праздников в Братске — от науки и мыльных пузырей до героев,
              дискотек и этно.
            </p>
            <div className="hero__actions">
              <a className="btn btn--light" href="#acts">
                Выбрать программу
              </a>
              <a className="btn btn--ghost" href={CONTACTS.vk} target="_blank" rel="noreferrer">
                Написать во ВКонтакте
              </a>
            </div>
            <p className="hero__meta mono">
              {RIDER.duration} · {RIDER.cast} · {RIDER.capacity}
            </p>
          </div>
        </section>

        <section className="section pathways" aria-labelledby="path-title">
          <div className="shell">
            <div className="section__head">
              <p className="section__kicker mono">С чего начать</p>
              <h2 className="section__title" id="path-title">
                Какой праздник собираете?
              </h2>
              <p className="section__text">
                Выберите задачу — откроем подходящий акт афиши. Полный список программ ниже.
              </p>
            </div>
            <div className="path-row" role="list">
              {PATHWAYS.map((item) => (
                <a className="path-chip" href={item.href} key={item.id} role="listitem">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="acts" aria-labelledby="acts-title">
          <div className="shell">
            <div className="section__head">
              <p className="section__kicker mono">Афиша Академии</p>
              <h2 className="section__title" id="acts-title">
                Четыре акта живого праздника
              </h2>
              <p className="section__text">
                Каждая программа — отдельный спектакль с реквизитом, музыкой и командой на выезде.
              </p>
            </div>
            <div className="acts">
              {ACTS.map((act) => (
                <article className="act" id={`act-${act.id}`} key={act.id}>
                  <div className={`act__stage ${act.stageClass}`}>
                    <img
                      className="act__photo"
                      src={act.image}
                      alt={act.imageAlt}
                      width={900}
                      height={700}
                      loading="lazy"
                    />
                    <div className="act__curtain" aria-hidden="true" />
                  </div>
                  <div className="act__body">
                    <p className="act__kicker mono">
                      {act.kicker}
                      {act.note ? ` · ${act.note}` : ''}
                    </p>
                    <h3 className="act__title">{act.title}</h3>
                    <ul className="act__list">
                      {act.highlights.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="act__footer">
                      <span className="act__price mono">{act.priceFrom}</span>
                      <a className="btn btn--primary" href="#contact">
                        Оставить заявку
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section rider" id="rider" aria-labelledby="rider-title">
          <div className="shell">
            <div className="section__head">
              <p className="section__kicker mono">Технический райдер</p>
              <h2 className="section__title" id="rider-title">
                Что входит в стандарт
              </h2>
              <p className="section__text">
                Формат из карточек услуг Академии. Точную стоимость уточняют по району и составу гостей.
              </p>
            </div>
            <div className="rider-grid">
              <div className="rider-item">
                <strong>{RIDER.duration}</strong>
                <span>Длительность программы</span>
              </div>
              <div className="rider-item">
                <strong>{RIDER.cast}</strong>
                <span>Состав на площадке</span>
              </div>
              <div className="rider-item">
                <strong>{RIDER.capacity}</strong>
                <span>Базовый расчёт</span>
              </div>
              <div className="rider-item">
                <strong>Братск</strong>
                <span>
                  {RIDER.zone}. {RIDER.travel}.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="catalog" aria-labelledby="catalog-title">
          <div className="shell">
            <div className="section__head">
              <p className="section__kicker mono">Полный каталог</p>
              <h2 className="section__title" id="catalog-title">
                Программы, которые можно заказать сейчас
              </h2>
              <p className="section__text">
                Состав по актуальному каталогу ВКонтакте. Если нужен герой или шоу вне списка — напишите,
                подскажем варианты.
              </p>
            </div>

            <div className="catalog-block">
              <h3>Увлекательные шоу</h3>
              <div className="pill-cloud">
                {SHOW_LIST.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="catalog-block">
              <h3>Активные программы и герои</h3>
              <div className="pill-cloud">
                {HERO_LIST.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="catalog-block">
              <h3>Интерактивные дискотеки</h3>
              <div className="pill-cloud">
                {DISCO_LIST.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="catalog-block">
              <h3>Этнические программы</h3>
              <div className="pill-cloud">
                {ETHNO_LIST.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="catalog-block">
              <h3>Ещё в афише</h3>
              <div className="extra-grid">
                {EXTRA_CATEGORIES.map((item) => (
                  <a className="extra-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                    <strong>{item.title}</strong>
                    <span className="mono">{item.priceFrom}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section trust" aria-labelledby="trust-title">
          <div className="shell trust-grid">
            <div>
              <div className="section__head">
                <p className="section__kicker mono">Доверие</p>
                <h2 className="section__title" id="trust-title">
                  Академия уже на связи с родителями Братска
                </h2>
              </div>
              <div className="trust-stats">
                <div className="stat">
                  <strong>{CONTACTS.ratingVk}</strong>
                  <span>рейтинг VK · {CONTACTS.reviewsVk} отзывов</span>
                </div>
                <div className="stat">
                  <strong>{CONTACTS.rating2gis}</strong>
                  <span>оценка 2ГИС · {CONTACTS.reviews2gis}</span>
                </div>
                <div className="stat">
                  <strong>{CONTACTS.subscribers}</strong>
                  <span>подписчиков в сообществе</span>
                </div>
              </div>
            </div>
            <p className="trust-note">
              Команда выступает на домашних праздниках, в садах и на городских площадках — в том числе с
              открытыми шоу в парке Металлургов. Заявки принимает {CONTACTS.orderName}, руководит{' '}
              {CONTACTS.leadName}.
            </p>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <div className="section__head">
              <p className="section__kicker mono">Заявка</p>
              <h2 className="section__title" id="contact-title">
                Соберём программу под ваш праздник
              </h2>
              <p className="section__text">
                Оставьте детали — скопируем текст заявки и откроем сообщество во ВКонтакте. Или
                позвоните сразу.
              </p>
              <ul className="contact-list">
                <li>
                  Телефон:{' '}
                  <a href={CONTACTS.phoneHref}>{CONTACTS.phoneDisplay}</a>
                </li>
                <li>
                  ВКонтакте:{' '}
                  <a href={CONTACTS.vk} target="_blank" rel="noreferrer">
                    academyofmiracles
                  </a>
                </li>
                <li className="mono">Заказы — {CONTACTS.orderName}</li>
              </ul>
            </div>

            <div className="contact-card">
              {sent ? (
                <p className="form__success" role="status">
                  Текст заявки скопирован в буфер. Откройте диалог с сообществом во ВКонтакте и
                  вставьте сообщение.
                </p>
              ) : null}
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Имя</label>
                  <input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Телефон</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="date">Дата праздника</label>
                  <input id="date" name="date" type="date" />
                </div>
                <div className="field">
                  <label htmlFor="age">Возраст ребёнка / гостей</label>
                  <input id="age" name="age" placeholder="например, 7 лет" />
                </div>
                <div className="field">
                  <label htmlFor="district">Район Братска</label>
                  <select id="district" name="district" defaultValue="Центральный">
                    <option>Центральный</option>
                    <option>Падунский / Энергетик</option>
                    <option>Правый берег</option>
                    <option>Другой район</option>
                    <option>Пока не знаю</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="program">Тип программы</label>
                  <select id="program" name="program" defaultValue="Пока выбираем">
                    <option>Пока выбираем</option>
                    <option>Увлекательные шоу</option>
                    <option>Активные программы и герои</option>
                    <option>Интерактивные дискотеки</option>
                    <option>Этнические программы</option>
                    <option>Новый год</option>
                    <option>Поздравления</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="note">Комментарий</label>
                  <textarea id="note" name="note" placeholder="Герой, площадка, пожелания…" />
                </div>
                <button className="btn btn--primary" type="submit">
                  Отправить во ВКонтакте
                </button>
                <p className="form__hint">
                  Заявка уходит текстом в сообщество Академии. Цены для Центрального района; выезд
                  считается отдельно.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer__inner">
          <p>Академия Чудес · праздники и аниматоры · Братск</p>
          <p>
            <a href={CONTACTS.vk} target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
            {' · '}
            <a href={CONTACTS.phoneHref}>{CONTACTS.phoneDisplay}</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
