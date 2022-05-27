<template>
  <div class="su_nosotros_equipo">
    <div class="su_section_intro">
      <h3>Somos un Equipo</h3>
      <h1>Comprometidos contigo.</h1>
      <p class="p-body">
        Trabajamos incansablemente para entregarte la mejor experiencia. Este es
        el sello SURETI.
      </p>
    </div>
    <div class="su-flex-row nosotros-equipo-row">
      <div class="su-flex-column nosotros-equipo-boxes">
        <div class="su-flex-row">
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/andres-rojas-leadership-accountability/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/su_andres.jpg" alt="Andres Rojas" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Andrés</span>
                  <br />
                  <span>Rojas</span>
                </h5>
                <p class="su-team-member-title"><b>CEO</b> - Fundador</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/carlos-vergel/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/Lalo.jpg" alt="Carlos Vergel" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Carlos</span>
                  <br />
                  <span>Vergel</span>
                </h5>
                <p class="su-team-member-title"><b>CTIO</b> - Fundador</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/carolina-chacon-021343102/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/su_caro.jpg" alt="Carolina Chacón" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Carolina</span>
                  <br />
                  <span>Chacón</span>
                </h5>
                <p class="su-team-member-title">Directora de Marketing</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/company/suretico/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/Jeronimo.jpg" alt="Jerónimo Vergel" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Jerónimo</span>
                  <br />
                  <span>Vergel</span>
                </h5>
                <p class="su-team-member-title">Director Comercial</p>
              </div>
            </a>
          </div>
        </div>
        <div class="su-flex-row">
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/jaiver-ocampo-96496695/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/su_jaiver.jpg" alt="Jaiver Ocampo" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Jaiver</span>
                  <br />
                  <span>Ocampo</span>
                </h5>
                <p class="su-team-member-title">Desarrollador Backend</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/company/suretico/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img
                  src="../../../../../src/assets/img/andres-saldarriaga.jpg"
                  alt="Andres Saldarriaga"
                />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Andres</span>
                  <br />
                  <span>Saldarriaga</span>
                </h5>
                <p class="su-team-member-title">Desarrollador Backend</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/edwin-alexander-rendon-cadavid-271030207/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img
                  src="../../../../../src/assets/img/edwin.jpg"
                  alt="Edwin Alexander Rendon Cadavid"
                />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Edwin</span>
                  <br />
                  <span>Rendón</span>
                </h5>
                <p class="su-team-member-title">Desarrollador Frontend</p>
              </div>
            </a>
          </div>
          <div class="su-flex-column">
            <a
              href="https://www.linkedin.com/in/ezzard-l%C3%B3pez-ux/"
              target="_blank"
            >
              <div class="su-team-member-photo">
                <img src="../../../../../src/assets/img/ezzard.jpg" alt="Ezzard Lopez" />
              </div>
              <div class="su-team-member-details">
                <h5 class="su-team-member-name">
                  <span>Ezzard</span>
                  <br />
                  <span>López</span>
                </h5>
                <p class="su-team-member-title">Diseñador UX/UI</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* h3, h4, p, duplicate from NosotrosValores */
.su_nosotros_equipo {
  margin: 0 auto;
  padding: 3.2rem 1.6rem;
  max-width: 1120px;
  @include for-tablet-landscape-up {
    padding: 6.4rem 1.6rem;
  }
}

.nosotros-equipo-row {
  padding: 1.6rem 0;
}
.nosotros-equipo-row > .su-flex-column {
  flex-basis: 100%;
  width: 100%;
}
.nosotros-equipo-boxes .su-flex-column {
  flex-basis: 47%;
  width: 47%;
  margin-bottom: 6%;
  background-color: #ffffff;
  box-shadow: 1px 1px 0 $su-purple-light;
  border-radius: 6px;
  min-height: 200px;
  overflow: hidden;
}
.su-team-member-photo {
  background-color: #222;
  width: 100%;
  border-radius: 6px 6px 0px 0px;
}
.su-team-member-details {
  padding: 1rem 1rem;
  @include for-desktop-up {
    padding: 1.6rem 1.6rem 1.8rem;
  }
}
.su-team-member-details h5 {
  font-size: 18px;
  color: $su-purple-100;
  line-height: 21px;
  font-weight: 700;
  @include for-tablet-landscape-up {
    font-size: 2.4rem;
    line-height: 120%;
  }
}
.su-team-member-details p {
  padding: 8px 0 5px;
  font-size: 13px;
  line-height: 16px;
  color: $su-gray-darker;
  @include for-tablet-landscape-up {
    padding: 16px 0 5px;
    font-size: 1.6rem;
  }
}
@media all and (min-width: 768px) {
  .nosotros-equipo-boxes .su-flex-column {
    flex-basis: 23%;
    width: 23%;
    margin: 1%;
  }
  .su-team-member-photo {
    background-color: #222;
    border-radius: 6px 6px 0px 0px;
  }
}
@media all and (min-width: 1100px) {
  .su-team-member-photo {
  }
}
</style>
