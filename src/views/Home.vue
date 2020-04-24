<template>
  <div class="home">
    <div class="preloader-mask">
      <div class="preloader"></div>
    </div>

    <section
      id="hero"
      class="hero-section bg1 bg-cover window-height light-text"
    >
      <ul class="socials-nav">
        <li class="socials-nav-item">
          <a href="https://twitter.com/netbaires" target="_blank">
            <span class="fa fa-twitter"></span>
          </a>
        </li>
        <li class="socials-nav-item">
          <a href="https://github.com/Net-Baires" target="_blank">
            <span class="fa fa-github"></span>
          </a>
        </li>
        <!-- <li class="socials-nav-item">
          <a href="https://net-baires.com.ar"><span class="fas fa-globe"></span></a>
        </li>-->
        <li class="socials-nav-item">
          <a href="https://www.instagram.com/netbaires" target="_blank">
            <span class="fa fa-instagram"></span>
          </a>
        </li>
      </ul>
      <div class="heading-block centered-block align-center">
        <div class="container">
          <h5 class="heading-alt" style="margin-bottom: 8px;">
            <span class="fa fa-calendar-o base-clr-txt"></span>19/20.Mayo 16Hs
            <span
              class="fa fa-map-marker base-clr-txt"
              style="margin-left: 14px;"
            ></span
            >ONLINE
          </h5>
          <h1 class="extra-heading" style="font-size: 60px;">
            Jornada de Arquitectura .NET
          </h1>
          <h3 class="extra-heading" style="font-size: 45px;">
            Unit Testing Everywhere
          </h3>
          <h6 class="thin base-font">
            Porque hacer arquitectura no es únicamente cosa de
            <strong>Arquitectos</strong>
          </h6>
          <div class="btns-container">
            <a :href="register.url" target="_blank" class="btn btn-md"
              >Registrarme</a
            >
            <!-- <a href="#" class="btn btn-outline btn-md" data-modal-link="0"
                >VIDEO</a
            >-->
          </div>
        </div>
      </div>
    </section>

    <header class="header header-black">
      <div class="header-wrapper">
        <div class="container">
          <div class="col-sm-2 col-xs-12 navigation-header">
            <a href="#" class="logo">
              <img
                src="assets/img/net-baires-completo.png"
                alt="VentCamp"
                width="119"
                height="40"
                class="retina-hide"
              />
              <img
                src="assets/img/net-baires-completo.png"
                alt="VentCamp"
                width="119"
                height="40"
                class="retina-show"
              />
            </a>
            <button
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-controls="navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class="col-sm-10 col-xs-12 navigation-container">
            <div id="navigation" class="navbar-collapse collapse">
              <ul class="navigation-list pull-left light-text">
                <li class="navigation-item">
                  <a href="#about" class="navigation-link">Conocenos</a>
                </li>
                <li class="navigation-item">
                  <a href="#speakers" class="navigation-link">Oradores</a>
                </li>
                <li v-if="schedule.enable" class="navigation-item">
                  <a href="#schedule" class="navigation-link">Agenda</a>
                </li>
                <li class="navigation-item">
                  <a href="#gallery" class="navigation-link">Eventos</a>
                </li>
                <li class="navigation-item">
                  <a href="#register" class="navigation-link">Contactanos</a>
                </li>
                <li class="navigation-item">
                  <a href="#sponsors" class="navigation-link">Sponsors</a>
                </li>
              </ul>

              <a :href="register.url" target="_blank" class="pull-right buy-btn"
                >Registrate</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="section align-center">
      <div class="container">
        <span class="icon section-icon icon-multimedia-12"></span>
        <h3>Conocenos</h3>
        <p class="text-alt">
          Enterate todo sobre nosotros y sobre la conferencia.
        </p>
        <br />
        <br />

        <div class="tabs-wrapper tabs-horizontal">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#horizontal_tab1" data-toggle="tab">
                <h6 class="heading-alt">
                  <span class="fa fa-code"></span> Información General
                </h6>
              </a>
            </li>
            <li>
              <a href="#horizontal_tab2" data-toggle="tab">
                <h6 class="heading-alt">
                  <span class="fa fa-rocket"></span> Charlas
                </h6>
              </a>
            </li>
            <!-- <li>
                <a href="#horizontal_tab3" data-toggle="tab">
                  <h6 class="heading-alt">
                    <span class="fa fa-external-link"></span> Información
                    Sponsors
                  </h6>
                </a>
            </li>-->
          </ul>

          <div class="tab-content">
            <div id="horizontal_tab1" class="tab-pane fade active in">
              <div class="col-sm-5 img-column">
                <img src="assets/img/jornada-logo.png" class="img-responsive" />
              </div>
              <div class="col-sm-7 align-left">
                <h6>Sobre nuestro evento</h6>
                <p>
                  Con el objetivo de acercar el concepto de arquitectura a todos
                  los desarrolladores, esta conferencia surgió a principios del
                  2019. Desde entonces, nos hemos focalizado, en tópicos como:
                  DDD, Patrones de Diseño, TDD, BDD, Unit Testing, buenas
                  prácticas, Clean Architecture, entre otros. A través de
                  workshops, actividades de networking, charlas, lightning talks
                  y demás actividades, buscamos que todos nuestros asistentes,
                  no solo comprendan los conceptos que transmitimos, si no que
                  los interioricen y sepan, cómo, cuándo y de que manera
                  aplicarlos en cada uno de sus desarrollos.
                </p>
                <p>
                  Este 2020 focalizamos todos nuestros esfuerzos en llegar a un
                  público mucho más amplio y dar espacio a nuevos speakers, que
                  puedan compartir todo su conocimiento y experiencias.
                </p>
              </div>
            </div>

            <div id="horizontal_tab2" class="tab-pane fade">
              <div class="col-sm-7 align-right">
                <h6>Charlas / Workshops</h6>
                <p>
                  En esta 4º edición focalizaremos nuestras actividades en la
                  temática de Unit Testing.
                </p>
                <p>
                  Las charlas, abarcan desde un nivel inicial donde explicaremos
                  los fundamentos y el porque del Unit testing, hasta escenarios
                  avanzamos donde aplicaremos diferentes técnicas, patrones y
                  buenas practicas para lograr una excelente calidad en nuestro
                  código.
                </p>
                <p>
                  Trataremos los test de unidad como la columna vertebral de
                  nuestros desarrollos y como tal nos encargaremos de
                  refactorizar y aplicar las mismas métricas de calidad que
                  aplicamos sobre el código del resto de nuestro app.
                </p>
              </div>

              <div class="col-sm-5 img-column">
                <img
                  src="assets/img/jornada-logo.png"
                  alt
                  class="img-responsive"
                />
              </div>
            </div>

            <!-- <div id="horizontal_tab3" class="tab-pane fade">
                <div class="col-sm-5 img-column">
                  <img
                    src="assets/img/jornada-logo.png"
                    alt=""
                    class="img-responsive"
                  />
                </div>
                <div class="col-sm-7 align-left">
                  <h6>Sponsors apply</h6>
                  <p>
                    Faucibus sed pretium. Ridiculus
                    <strong>consectetuer</strong> et. In arcu enim sit in libero
                    scelerisque mauris sed. Nullam eleifend in varius arcu vitae
                    feugiat magna id ut morbi consectetuer. In vivamus arcu. Id
                    ut dui. Sed massa in. Scelerisque suscipit quisque maecenas
                    aliquet in. Wisi mi ipsum. Elit et mauris. Duis in magni
                    praesent <a href="#">content</a> massa.
                  </p>
                  <ul>
                    <li>Nisl cras vitae wisi odio amet.</li>
                    <li>Lacus amet vestibulum belas</li>
                    <li>Quis nunc curabitur assumenda</li>
                  </ul>
                </div>
            </div>-->
          </div>
        </div>
      </div>
    </section>

    <section
      id="counters"
      class="section align-center overlay bg-cover bg5 light-text"
    >
      <div class="container">
        <div class="row counters-wrapper">
          <div class="col-sm-3">
            <div class="counter-block counter-block-no-border">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count" data-from="0" :data-to="counter.speakers"
                    >0</span
                  >

                  <p class="title">Oradores</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="counter-block counter-block-no-border">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count" data-from="0" :data-to="counter.attendees"
                    >0</span
                  >

                  <p class="title">Asistentes</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="counter-block counter-block-no-border">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count" data-from="0" :data-to="counter.editions"
                    >0</span
                  >

                  <p class="title">Ediciones</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="counter-block counter-block-no-border">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count" data-from="0" :data-to="counter.sponsors"
                    >0</span
                  >

                  <p class="title">Sponsors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="speakers" class="section align-center">
      <div class="container">
        <span class="icon section-icon icon-faces-users-04"></span>
        <h3>Oradores</h3>
        <p class="text-alt">
          Conocé a nuestros
          <span class="highlight">profesionales</span>
        </p>
        <br />
        <br />
        <div v-if="speakers.enableList">
          <div
            v-for="speaker in speakers.list"
            v-bind:key="speaker"
            class="col-sm-4"
          >
            <div class="speaker">
              <div class="photo-wrapper rounded">
                <img
                  :src="'assets/img/speakers/' + speaker.photo"
                  alt="Germán Küber"
                  class="img-responsive"
                />
              </div>
              <h3 class="name">{{ speaker.name }}</h3>
              <p class="text-alt">
                <small>{{ speaker.position }}</small>
              </p>
              <p class="about">{{ speaker.description }}</p>
              <ul class="speaker-socials">
                <li>
                  <a :href="speaker.name">
                    <span class="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a :href="'https://twitter.com/' + speaker.twitter">
                    <span class="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-google-plus"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="speakers.talk.enable" class="col-sm-12 align-center">
          <a
            :href="speakers.talk.url"
            target="_blank"
            class="btn btn-outline-clr btn-md"
            >{{ speakers.talk.text }}</a
          >
        </div>
      </div>
    </section>

    <section
      v-if="schedule.enable"
      id="schedule"
      class="section schedule-section align-center"
    >
      <div class="container">
        <span class="icon section-icon icon-office-21"></span>
        <h3>Agenda</h3>
        <p class="text-alt">
          Elegí las charlas y horarios que mejor se adapten a vos.
          <br />and
          <span class="highlight">vos</span>
        </p>
        <br />
        <br />

        <!-- Schedule start -->
        <div class="schedule">
          <!-- Navigation by day start -->
          <ul class="nav nav-schedule">
            <li
              :class="{ active: indexDay === 0 }"
              v-for="(day, indexDay) in schedule.list"
              v-bind:key="indexDay"
            >
              <a :href="'#day' + indexDay" data-toggle="tab">
                <h5 class="highlight">{{ day.day.title }}</h5>
                <p class="text-alt">{{ day.day.date }}</p>
              </a>
            </li>
          </ul>
          <!-- Navigation by day end -->

          <!-- First level content start -->
          <div class="tab-content">
            <div
              :class="{ 'tab-pane fade in': true, 'active in': indexDay === 0 }"
              v-for="(day, indexDay) in schedule.list"
              :id="'day' + indexDay"
              v-bind:key="indexDay"
            >
              <ul class="nav nav-schedule">
                <li
                  :class="{ active: indexTrack === 0 }"
                  v-for="(track, indexTrack) in day.tracks"
                  v-bind:key="indexTrack"
                >
                  <a
                    v-if="track != null"
                    :href="'#day' + indexDay + '_auditorium' + indexTrack"
                    data-toggle="tab"
                    >{{ track.title }}</a
                  >
                </li>
              </ul>
              <!-- Second level content start -->
              <div class="tab-content tab-content-schedule">
                <div
                  :id="'day' + indexDay + '_auditorium' + indexTrack"
                  :class="{
                    'tab-pane fade in': true,
                    active: indexTrack === 0,
                  }"
                  v-for="(track, indexTrack) in day.tracks"
                  v-bind:key="indexTrack"
                >
                  <!-- Accordion start -->
                  <div
                    v-if="track != null"
                    class="panel-group"
                    :id="
                      'day' +
                        indexDay +
                        '_auditorium' +
                        indexTrack +
                        '_timeline'
                    "
                  >
                    <!-- Lecture start -->
                    <div
                      class="panel schedule-item"
                      v-for="(lecture, indexLecture) in track.lectures"
                      v-bind:key="indexLecture"
                    >
                      <div class="lecture-icon-wrapper">
                        <img
                          :src="'assets/img/speakers/' + lecture.photo"
                          alt
                          class="img-responsive"
                        />
                      </div>
                      <a
                        data-toggle="collapse"
                        :data-parent="
                          '#day' +
                            indexDay +
                            '_auditorium' +
                            indexTrack +
                            '_timeline'
                        "
                        :href="
                          '#day' +
                            indexDay +
                            '_auditorium' +
                            indexTrack +
                            '_time' +
                            indexLecture
                        "
                        class="schedule-item-toggle collapsed"
                      >
                        <strong class="time highlight">
                          <span class="icon icon-office-24"></span>
                          {{ lecture.time }}
                        </strong>
                        <h6 class="title">
                          {{ lecture.title }}
                          <i class="icon icon-arrows-06"></i>
                        </h6>
                      </a>
                      <div
                        :id="
                          'day' +
                            indexDay +
                            '_auditorium' +
                            indexTrack +
                            '_time' +
                            indexLecture
                        "
                        class="panel-collapse schedule-item-body collapsed collapse"
                      >
                        <article>
                          <p class="description">{{ lecture.description }}</p>
                          <strong class="highlight speaker-name">{{
                            lecture.speaker
                          }}</strong>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="section align-center">
      <div class="container">
        <span class="icon section-icon icon-badges-votes-01"></span>
        <h3>Ediciones anteriores</h3>
        <p class="text-alt">
          Algo de lo que vivimos en nuestras ediciones
          <span class="highlight">anteriores</span>
        </p>
        <br />

        <div class="gallery masonry">
          <span
            v-for="(event, indexEvent) in previousEvents"
            v-bind:key="indexEvent"
            class="masonry-item"
          >
            <a href="#" class="gallery-thumb-link" data-modal-link="gallery-1">
              <img :src="event.image" :alt="event.alt" />
            </a>

            <div class="modal-window" data-modal="gallery-1">
              <div
                class="modal-box medium animated"
                data-animation="zoomIn"
                data-duration="700"
              >
                <span class="close-btn icon icon-office-52"></span>

                <h5 class="heading-alt">{{ event.alt }}</h5>
                <br />

                <img
                  :src="event.image"
                  :alt="event.alt"
                  class="full-width-img"
                />
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>

    <section
      id="register"
      class="section overlay overlay-clr bg-cover bg4 light-text align-center"
    >
      <div class="container">
        <h2>Contanos tu ideas</h2>
        <p>
          Queremos que esta conferencia este a la altura de lo que estas
          buscando.
          <br />Por eso queremos escuchar tus ideas, sugerencias y saber de vos.
          <br />Ayudanos a ser cada días mas grandes.
        </p>
        <br />
        <br />

        <a :href="tellAboutYourself.url" class="btn btn-lg btn-outline">{{
          tellAboutYourself.text
        }}</a>
      </div>
    </section>

    <section id="sponsors" class="section align-center">
      <div class="container">
        <span class="icon section-icon icon-documents-bookmarks-12"></span>
        <h3>Sponsors</h3>
        <p class="text-alt">Empresas que hacen posible este evento</p>
        <br />
        <br />

        <div class="sponsors">
          <div
            v-for="(sponsor, indexSponsor) in sponsors.bigger"
            v-bind:key="indexSponsor"
            class="sponsor big"
          >
            <a :href="sponsor.url">
              <img :src="sponsor.image" :alt="sponsor.alt" />
            </a>
          </div>
        </div>
        <div class="sponsors">
          <div
            v-for="(sponsor, indexSponsor) in sponsors.smaller"
            v-bind:key="indexSponsor"
            class="sponsor inline"
          >
            <a :href="sponsor.url">
              <img
                style="width: 175px;"
                :src="sponsor.image"
                :alt="sponsor.alt"
              />
            </a>
          </div>
        </div>

        <div class="row btns-block">
          <a :href="sponsors.becomeInSponsor.url" class="btn">{{
            sponsors.becomeInSponsor.text
          }}</a>
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <div class="col-md-4">
          <div class="widget about-widget">
            <h6 class="widget-head">
              Sobre
              <span class="highlight">NET-Baires</span>
            </h6>
            <p class="text-alt">
              <small>
                Somos la comunidad de desarrolladores mas grande toda la
                <span class="highlight">Argentina</span>. Nuestro objetivo es el
                de poner el conocimiento al acance de todos. Para lograrlo
                llevamos adelante conferencias, meetup, workshop, encuentros
                online, etc. No dudes en proponer tus ideas para ayudarnos a
                crecer.
              </small>
            </p>

            <a href="https://net-baires.com.ar">
              <img src="assets/img/net-baires-logo.png" alt="autograph" />
            </a>
          </div>
        </div>

        <!-- <div class="col-md-4 col-lg-3 col-lg-offset-1">
            <div class="widget twitter-widget">
              <h6 class="widget-head">
                <span class="fa fa-twitter"></span> Twitter Feed
              </h6>

              <ul class="tweets-list">
                <li class="tweet">
                  <p class="text-alt tweet-text">
                    Grabehan <a href="#">#NowPlaying</a> Future People by
                    Alabama Shakes
                    <a href="http://spoti.fi/1CTPWcW"
                      >http://spoti.fi/1CTPWcW</a
                    >
                  </p>
                  <small class="tweet-date">7 sep 2015</small>
                </li>

                <li class="tweet">
                  <p class="text-alt tweet-text">
                    Loving <a href="#">@TryGhost</a> so far. Ghost theming here
                    I come!
                  </p>
                  <small class="tweet-date">8 sep 2015</small>
                </li>

                <li class="tweet">
                  <p class="text-alt tweet-text">
                    We didn't set out to be superheroes. But sometimes, life
                    doesn't go the way you planned. <a href="#">#TI5</a>
                    <a href="#">#BleedBlue</a>
                  </p>
                  <small class="tweet-date">9 sep 2015</small>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 col-lg-3 col-lg-offset-1">
            <div class="widget instagram-widget">
              <h6 class="widget-head">
                <span class="fa fa-instagram"></span> Photo feed
              </h6>

              <ul class="instagram-list">
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
                <li>
                  <img src="assets/img/gallery/footer-photo.jpg" alt="photo" />
                </li>
              </ul>
            </div>
        </div>-->
      </div>

      <div class="footer-base">
        <div class="container">
          <div class="col-md-6">
            <ul class="footer-nav">
              <!-- <li class="footer-nav-item"><a href="#">Contact</a></li>
                <li class="footer-nav-item"><a href="#">Privacy policy</a></li>
              <li class="footer-nav-item"><a href="#">Press</a></li>-->
            </ul>
          </div>

          <div class="col-md-6 align-right">
            <ul class="socials-nav align-right">
              <li class="socials-nav-item">
                <a href="https://twitter.com/netbaires" target="_blank">
                  <span class="fa fa-twitter"></span>
                </a>
              </li>
              <li class="socials-nav-item">
                <a href="https://github.com/Net-Baires" target="_blank">
                  <span class="fa fa-github"></span>
                </a>
              </li>
              <!-- <li class="socials-nav-item">
                <a href="https://net-baires.com.ar"><span class="fas fa-globe"></span></a>
              </li>-->
              <li class="socials-nav-item">
                <a href="https://www.instagram.com/netbaires" target="_blank">
                  <span class="fa fa-instagram"></span>
                </a>
              </li>
            </ul>

            <p class="text-alt">
              <small>All Rights Reserved © NET-Baires 2020</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: function() {
    return {
      register: {
        url:
          "https://www.eventbrite.com.ar/e/jornada-de-arquitectura-net-unit-testing-everywhere-2-dias-tickets-102989662854",
      },
      speakers: {
        talk: {
          text: "Propone tu charla",
          url: "https://sessionize.com/4-jornada-de-arquitectura-net/",
          enable: true,
        },
        enableList: true,
        list: [
          {
            name: "Germán Küber",
            position: "Arquitecto de Software",
            description:
              "Orador, Organizador, Fundador de NET-Baires, Microsoft MVP, Mago",
            twitter: "germankuber",
            github: "germankuber",
            linkedin: "germankuber",
            photo: "german-kuber.png",
          },
        ],
      },
      counter: {
        speakers: 13,
        attendees: 300,
        editions: 3,
        sponsors: 10,
      },

      previousEvents: [
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/1.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/2.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/3.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/4.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/5.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/6.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/7.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/8.jpg",
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/9.jpg",
        },
      ],
      sponsors: {
        bigger: [
          {
            name: "Globant",
            image: "assets/img/sponsors/globant.png",
            alt: "",
            url: "https://www.globant.com/",
          },
          {
            name: "Hexacta",
            image: "assets/img/sponsors/hexacta.jpg",
            alt: "",
            url: "https://www.hexacta.com/",
          },
          {
            name: "Cognizant Softvision",
            image: "assets/img/sponsors/softvision.png",
            alt:
              "Somos una compañía global con más de 20 años de experiencia en el mundo digital diseñando y construyendo productos innovadores y soluciones disruptivas para clientes internacionales.",
            url: "https://www.cognizantsoftvision.com/",
          },
        ],
        smaller: [
          {
            name: "CloudX",
            image: "assets/img/sponsors/cloudx.png",
            alt: "CloudX.",
            url: "https://www.cloudx.com/",
          },
          {
            name: "Microsoft User Group",
            image: "assets/img/sponsors/mug.png",
            alt: "Microsoft User Group",
            url: "https://mug-it.org.ar",
          },
          {
            name: "Globalogic",
            image: "assets/img/sponsors/globalogic.png",
            alt:
              "En GlobalLogic creamos productos digitales combinando nuestra experiencia en diseño e ingeniería compleja para ayudar a nuestros clientes a imaginar lo imposible y acelerar su transición a los negocios digitales del futuro.",
            url: "https://www.globallogic.com/latam/",
          },
        ],
        becomeInSponsor: {
          text: "Convertite en Sponsor",
          url: "mailto: info@net-baires.com.ar",
        },
      },
      tellAboutYourself: {
        text: "Contanos sobre vos",
        url: "mailto: info@net-baires.com.ar",
      },
      schedule: {
        enable: false,
        list: [
          {
            day: {
              title: "Día 1",
              date: "8/9/2019",
            },
            tracks: [
              {
                title: "Sala 1",
                lectures: [
                  {
                    picture: "",
                    time: "09:00 AM",
                    title: "Introducción 1 1",
                    speaker: "Germán Küber",
                    description: "Primera charla de presentación",
                    photo: "german-kuber.png",
                  },
                ],
              },
              {
                title: "Sala 2",
                lectures: [
                  {
                    picture: "",
                    time: "09:00 AM",
                    title: "Introducción 2 1",
                    speaker: "Germán Küber",
                    description: "Primera charla de presentación",
                    photo: "german-kuber.png",
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
