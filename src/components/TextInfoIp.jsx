import React from "react";
import computer from "../assets/computer.png"
import conection from "../assets/conection.png"
import ilustrativoconexion from "../assets/ilustrativoconexion.png"
import securecomputer from "../assets/securecomputer.png"
import tablaip from "../assets/tablaip.jpeg"
import '../styles/TextInfoIp.css'
import { Link } from "react-router-dom";

export const TextInfoIp = () => {
    return (
        <div className="info-post">
          <h1>¿Qué pueden hacer con tu dirección IP?</h1>
          <p>
            Las direcciones IP, a menudo envueltas en un aura de misterio dentro del mundo de la informática, han generado múltiples mitos, entre ellos que es posible hackear a alguien con solo conocer este dato. ¿Pero realmente es así? ¿Qué pueden hacer realmente con tu dirección IP? ¿Pueden geolocalizarte, acceder a tus datos personales, o incluso a tu dispositivo?
          </p>
          <img src={conection} alt="Ilustración relacionada con IP" />
          <h2>¿Qué es una dirección IP?</h2>
          <p>
            Primero, es esencial entender qué es una dirección IP. IP son las siglas de "Internet Protocol" (Protocolo de Internet) y representa el protocolo que permite que la información viaje de un punto A a un punto B en una red, independientemente de la tecnología utilizada. Introducido en 1981, el protocolo IP define las direcciones IP como identificadores únicos para los dispositivos en la red.
          </p>
          <p>
            Hoy en día, existen dos tipos principales de direcciones IP: IPv4 e IPv6. Las direcciones IPv4, que consisten en 32 bits, ofrecen aproximadamente 4.300 millones de direcciones. Aunque inicialmente parecían suficientes, el rápido crecimiento de los dispositivos conectados a Internet agotó este espacio de direcciones. Para solucionar este problema, se introdujo IPv6 en 1998, que utiliza direcciones de 128 bits, proporcionando un número prácticamente ilimitado de direcciones.
          </p>
          <img src={ilustrativoconexion} alt="Ilustración de IP" />
          <h2>Funcionamiento de una dirección IP:</h2>
          <p>
            Cada dispositivo que se conecta a una red necesita una dirección IP, que es asignada mediante el protocolo DHCP (Dynamic Host Configuration Protocol). Este protocolo funciona como por ejemplo un administrador que asigna asientos (direcciones IP) a los invitados (dispositivos) que llegan a una fiesta (red).
          </p>
          <p>
            Sin embargo, hasta ahora hemos hablado de direcciones IP privadas, que son útiles solo dentro de una red local (como la de tu hogar) pero para identificar un dispositivo en todo Internet, necesitamos una dirección IP pública.
          </p>
          <h3>¿Cómo sé si una IP es pública o privada?</h3>
          <p>
            Las direcciones IP privadas son asignadas por el protocolo DHCP y no pueden usarse para identificar dispositivos en toda Internet. Para saber si una IP es pública o privada, puedes usar el comando <strong>ipconfig</strong> en el CMD de Windows. Las IPs privadas están siempre dentro de ciertos rangos específicos definidos en la siguiente tabla:
          </p>
          <img src={tablaip} alt="Ilustración de la tabla" />
          <h3>Importancia de la IP pública</h3>
          <p>
            Las direcciones IP públicas son las que realmente nos identifican en Internet, ya que son únicas. Varias personas pueden tener la misma IP privada, pero solo una puede tener una dirección IP pública específica.
          </p>
          <h3>¿Para que necesitamos una IP pública?</h3>
          <p>
            ¿No puedo simplemente elegir ser anónimo en internet y que nadie rastree lo que hago? Bueno, no es tan fácil. Sin una dirección IP sería imposible para las páginas web enviar información a tu dispositivo. Básicamente, al igual que necesitas una dirección física para recibir correo en tu casa, la dirección IP hace que los datos enviados desde tu dispositivo lleguen a su destino correcto.
          </p>
          <p>
            Es completamente lógico pensar que, ¿qué pasa si una persona con malas intenciones se hace con mi dirección IP pública? ¿Estoy en peligro?
          </p>
          <p>
            Depende, ya que la geolocalización mediante la dirección IP es más una aproximación que otra cosa. Básicamente, por cómo funciona.
          </p>
          <p>
            Tu proveedor de internet te asigna una dirección IP pública, la cual está registrada en una base de datos que contiene un rango de direcciones IP y su ubicación geográfica aproximada. El caso es que esta localización está más relacionada con el punto de distribución del proveedor más cercano que con tu ubicación física actual.
          </p>
          <p>
            Como ejemplo, si vives en una gran ciudad, la geolocalización por IP puede llegar a acertar con la ciudad e incluso el barrio donde te encuentres, pero es muy poco probable que te apunte directamente a tu casa o a tu calle. Y en el caso de hacerlo, sería casualidad. Los proveedores de internet tienen grupos de direcciones IP que reparten a sus clientes de forma aleatoria, sin que cada dirección se conecte con una casa o un lugar específico. Además, muchas veces estas direcciones IP públicas cambian cada vez que reinicias el router y también lo hacen de forma arbitraria según lo decida el proveedor, lo que hace aún más difícil saber exactamente dónde estás con solo tu IP.
          </p>
          <h3>¿Qué pueden hacer con tu IP pública?</h3>
          <img src={computer} alt="Riesgos de la IP pública" />
          <p>
            Conocer tu IP pública no permite automáticamente que alguien pueda hackearte, pero puede facilitar ciertas acciones maliciosas. Aquí algunos ejemplos:
          </p>
          <ol>
            <li><strong>Geolocalización</strong>: Aunque no es precisa, la geolocalización mediante la IP puede aproximar tu ubicación a nivel de ciudad o barrio, pero no a tu casa exacta. Esto se debe a que las direcciones IP están asociadas a un proveedor de servicios de Internet (ISP), cuyo punto de distribución puede estar en una ubicación cercana, pero no exacta a la tuya.</li>
            <li><strong>Ataques de Denegación de Servicio (DoS)</strong>: Un atacante puede enviar una gran cantidad de tráfico a tu dirección IP, saturando tu ancho de banda y recursos, haciendo que tu red se vuelva inoperativa. Aunque este tipo de ataques generalmente se dirigen a sitios web y servicios grandes, también pueden afectar a usuarios individuales con las herramientas adecuadas.</li>
            <li><strong>Rastreo de actividad en línea</strong>: Los anunciantes pueden utilizar tu dirección IP para rastrear tus hábitos de navegación y ofrecerte anuncios dirigidos. Sin embargo, la capacidad de identificarte personalmente sigue siendo limitada.</li>
            <li><strong>Hackeo de dispositivos conectados</strong>: Un hacker podría intentar acceder a dispositivos conectados a tu red local, como cámaras de seguridad, impresoras y otros dispositivos IoT con vulnerabilidades.</li>
          </ol>
          <p>
            En este caso, para ver tu IP pública podés consultarlo en esta misma web ➡️.
          </p>
          <Link to="/" style={{color: '#6730ec' , textDecoration: 'underline'}}>
          Consulta tu IP</Link>
          <h2>¿Cómo proteger tu IP pública?</h2>
          <img src={securecomputer} alt="Protección de la IP pública" />
          <p>
            Existen varias formas de proteger tu dirección IP pública y minimizar los riesgos asociados. Aquí algunos consejos:
          </p>
          <ul>
            <li><strong>Usa una VPN (Virtual Private Network)</strong>: Una VPN oculta tu dirección IP real y la reemplaza con una dirección IP del servidor VPN, proporcionando anonimato y seguridad adicionales.</li>
            <li><strong>Configura un firewall</strong>: Un firewall puede filtrar el tráfico entrante y saliente de tu red, bloqueando accesos no autorizados.</li>
            <li><strong>Mantén tus dispositivos actualizados</strong>: Asegúrate de que todos los dispositivos conectados a tu red tengan las últimas actualizaciones de seguridad para minimizar las vulnerabilidades.</li>
            <li><strong>Desactiva el uso compartido de archivos y dispositivos</strong>: Si no necesitas compartir archivos o dispositivos en tu red, desactiva estas funciones para reducir el riesgo de acceso no autorizado.</li>
          </ul>
          <h2>Conclusión:</h2>
          <p>
            En resumen, conocer tu dirección IP pública no permite automáticamente que alguien pueda hackearte, pero puede facilitar ciertas acciones maliciosas como la geolocalización aproximada, ataques de denegación de servicio, rastreo de actividad en línea y hackeo de dispositivos conectados. Proteger tu IP pública mediante el uso de una VPN, la configuración de un firewall, mantener tus dispositivos actualizados y desactivar el uso compartido de archivos y dispositivos son medidas esenciales para minimizar estos riesgos y mejorar tu seguridad en línea.
          </p>
        </div>
      );
    };
