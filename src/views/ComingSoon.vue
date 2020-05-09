<template>
  <div class="home">
    <div class="preloader-mask">
      <div class="preloader"></div>
    </div>

    <section class="hero-section bg4 bg-cover comming-soon window-height light-text overlay">
      <div class="heading-block centered-block align-center">
        <div class="container">
          <h1>
            Jornada de Arquitectura
            <span class="highlight">.NET</span>
          </h1>
          <div class="row counters-wrapper countdown">
            <div class="counter-block counter-block-solid">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count">{dnn}</span>

                  <p class="title">days</p>
                </div>
              </div>
            </div>

            <div class="counter-block counter-block-solid">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count">{hnn}</span>

                  <p class="title">hours</p>
                </div>
              </div>
            </div>

            <div class="counter-block counter-block-solid">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count">{mnn}</span>

                  <p class="title">minutes</p>
                </div>
              </div>
            </div>

            <div class="counter-block counter-block-solid">
              <div class="counter-box">
                <div class="counter-content">
                  <span class="count">{snn}</span>

                  <p class="title">seconds</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <form action="" method="post" class="form row">
            <fieldset class="col-sm-8">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@email.com"
              />
            </fieldset>

            <fieldset class="col-sm-4">
              <input
                type="submit"
                value="submit"
                class="btn btn-sm btn-outline-clr"
              />
            </fieldset>
          </form>-->

          <!-- <h5>
            Muy pronto abriremos la inscripción para la
            <span class="highlight">4º edición</span>
          </h5>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "ComingSoon",
  data: function() {
    return {
      register: {
        url: "http://jornadadearquitectura.net/coming-soon.html"
      },
      speakers: {
        talk: {
          text: "Propone tu charla",
          url: "https://sessionize.com/4-jornada-de-arquitectura-net/",
          enable: true
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
            photo: "german-kuber.png"
          }
        ]
      },
      counter: {
        speakers: 13,
        attendees: 300,
        editions: 3,
        sponsors: 10
      },

      previousEvents: [
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/1.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/2.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/3.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/4.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/5.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/6.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/7.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/8.jpg"
        },
        {
          alt: "Segunda Jornada de Arquitectura .NET - Accenture Argentina",
          image: "assets/img/events/previous/9.jpg"
        }
      ],
      sponsors: {
        bigger: [
          {
            name: "Hexacta",
            image: "assets/img/sponsors/hexacta.jpg",
            alt: "",
            url: "https://www.hexacta.com/"
          },
          {
            name: "Cognizant Softvision",
            image: "assets/img/sponsors/softvision.png",
            alt:
              "Somos una compañía global con más de 20 años de experiencia en el mundo digital diseñando y construyendo productos innovadores y soluciones disruptivas para clientes internacionales.",
            url: "https://www.cognizantsoftvision.com/"
          }
        ],
        smaller: [
          {
            name: "Microsoft User Group",
            image: "assets/img/sponsors/mug.png",
            alt: "Microsoft User Group",
            url: "https://mug-it.org.ar"
          },
          {
            name: "Globalogic",
            image: "assets/img/sponsors/globalogic.png",
            alt:
              "En GlobalLogic creamos productos digitales combinando nuestra experiencia en diseño e ingeniería compleja para ayudar a nuestros clientes a imaginar lo imposible y acelerar su transición a los negocios digitales del futuro.",
            url: "https://www.globallogic.com/latam/"
          }
        ],
        becomeInSponsor: {
          text: "Convertite en Sponsor",
          url: "mailto: info@net-baires.com.ar"
        }
      },
      tellAboutYourself: {
        text: "Contanos sobre vos",
        url: "mailto: info@net-baires.com.ar"
      },
      schedule: {
        enable: false,
        list: [
          {
            day: {
              title: "Día 1",
              date: "8/9/2019"
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
                    photo: "german-kuber.png"
                  }
                ]
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
                    photo: "german-kuber.png"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
