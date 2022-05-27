<template>
  <div class="su_nosotros_values">
    <div class="su-flex-row nosotros-valores-row">
      <div class="su-flex-column nosotros-valores-copy su_section_intro">
        <h3>Valores Sureti</h3>
        <h1>La colaboración hace la diferencia.</h1>
        <p class="p-body">
          Construimos relaciones de confianza a largo plazo basándonos en la
          transparencia y eficiencia de nuestros procesos.
        </p>
      </div>
      <div class="su-flex-column nosotros-valores-boxes">
        <div class="su-flex-row">
          <div class="su-flex-column nosotros-valores-box">
            <div class="su-flex-row nosotros-box-wrap">
              <img src="../../../../../src/assets/img/su_apasionados.png" />
              <h4>Apasionados</h4>
              <p>
                Nos entusiasma lo que hacemos, mejorar cada día es parte de
                nuestro espíritu. Ser disruptores sin miedo a equivocarnos es
                nuestro motor.
              </p>
            </div>
          </div>
          <div class="su-flex-column nosotros-valores-box">
            <div class="su-flex-row nosotros-box-wrap">
              <img src="../../../../../src/assets/img/su_empaticos.png" />
              <h4>Empáticos</h4>
              <p>
                Siempre buscamos lo mejor para las personas. Premiamos el
                aprendizaje y el trabajo en equipo.
              </p>
            </div>
          </div>
          <div class="su-flex-column nosotros-valores-box">
            <div class="su-flex-row nosotros-box-wrap">
              <img src="../../../../../src/assets/img/su_tecnologico.png" />
              <h4>Tecnológicos</h4>
              <p>
                Desarrollamos nuestra propia plataforma para entregarte
                productos exclusivos y con el mejor servicio.
              </p>
            </div>
          </div>
          <div class="su-flex-column nosotros-valores-box">
            <div class="su-flex-row nosotros-box-wrap">
              <img src="../../../../../src/assets/img/su_eficientes.png" />
              <h4>Eficientes</h4>
              <p>
                Somos ágiles decidiendo y ejecutando. Automatizamos los procesos
                que facilitan la vida a nuestros clientes. Eliminamos los que
                nos vuelven lentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.su_nosotros_values {
  padding: 0 1.6rem;
  margin-bottom: 3.2rem;
  @include for-tablet-landscape-up {
    margin-bottom: 6.4rem;
  }
  .su_section_intro {
    margin-bottom: 1.6rem;
  }
  .nosotros-valores-box {
    box-shadow: 3px 3px 0 $su-purple-light;
    h4 {
      color: $su-purple-140;
    }
    p {
      color: $su-gray-dark;
      font-weight: 400;
    }
  }
}

.nosotros-valores-row > .su-flex-column {
  flex-basis: 100%;
}
.nosotros-valores-row > .su-flex-column.nosotros-valores-copy {
  padding: 30px 0 10px;
}

.nosotros-valores-boxes .su-flex-column {
  margin: 0 1% 8%;
  background-color: #f5f4ff;
  border-radius: 8px;
}
.nosotros-box-wrap {
  padding: 2.4rem;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 45px;
  }
}
.nosotros-box-wrap img {
  margin-right: 15px;
}

.nosotros-box-wrap p {
  padding: 15px 5px;
  font-size: 16px;
  line-height: 145%;
  letter-spacing: 0.015em;
}
@media all and (min-width: 580px) {
  .nosotros-valores-row {
    padding-top: 30px;
  }
  .nosotros-valores-row > .su-flex-column {
    padding: 0;
  }
  .nosotros-valores-row > .su-flex-column.nosotros-valores-boxes {
    padding-top: 20px;
  }
  .nosotros-valores-boxes .su-flex-column {
    flex-basis: 46%;
    width: 45%;
    margin: 2%;
    border-radius: 8px;
  }
}
@media all and (min-width: 920px) {
  .nosotros-valores-row > .su-flex-column.nosotros-valores-copy {
    flex-basis: 30%;
    margin-right: 3.2rem;
  }
  .nosotros-valores-row > .su-flex-column.nosotros-valores-boxes {
    flex-basis: 66%;
  }
}
</style>
