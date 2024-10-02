import React, { useState, forwardRef } from "react";
import styles from "./Details.module.css";
import Ipad from "./imgs/Apple Ipad.png";
import Ipad_vid from "./vids/iPad.mp4";
import Sony_Headphone from "./imgs/Sony Headphone.png";
import Sony_Headphone_vid from "./vids/SonyHeadphone.mp4";
import MacBook_Air from "./imgs/Macbook Air.png";
import Nikon_DSLR from "./imgs/Nikon DSLR.png";
import Nikon_DSLR_vid from "./vids/NikonDSLR.mp4";
import Playstation from "./imgs/Playstation.png";
import Macbook_Pro from "./imgs/MacbookPro.png";
import Macbook_Pro_vid from "./vids/MacBookPro.mp4";
import Bose_Speaker from "./imgs/BoseSpeaker.png";
import Galaxy_S8 from "./imgs/GalaxyS8.png";
import Galaxy_S8_vid from "./vids/GalaxyS8.mp4";
import Iphone from "./imgs/Iphone.png";
import Canon_DSLR from "./imgs/CanonDSLR.png";
import Canon_DSLR_vid from "./vids/CanonDSLR.mp4";
import Google_Pixel from "./imgs/GooglePixel.png";
import Apple_Watch from "./imgs/AppleWatch.png";
import Button from "./Button.jsx";

const Details = forwardRef((props, ref) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [showAll, setShowAll] = useState(false); // Controla se todos os cards estão abertos

  const handleShowAll = () => {
    setShowAll(!showAll); // Alterna entre abrir todos ou fechar todos
  };

  const handleCardClick = (productId) => {
    // Alterna o estado de ativação do card clicado
    setActiveProduct(activeProduct === productId ? null : productId);
  };

  return (
    <div ref={ref} className={styles.main}>
      <h2>
        Mais <b>Info</b>
      </h2>
      <Button primary={true} size="small" onClick={handleShowAll}>
        {showAll ? "Fechar Todos" : "Abrir Todos"}
      </Button>
      <ul className={styles.cardContainer}>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 1 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(1)}
        >
          <h4>Apple iPad</h4>
          {(showAll || activeProduct === 1) && (
            <div className={styles.cardDetails}>
              <img src={Ipad} alt="Apple iPad" />
              <ul>
                <li>Apple Chip M1 para desempenho de próximo nível.</li>
                <li>
                  Tela Retina XDR líquida brilhante de 12,9 polegadas com
                  ProMotion, True Tone e cor ampla P3
                </li>
                <li>
                  Sistema de câmera TrueDepth com câmera ultra ampla com palco
                  central
                </li>
                <li>
                  Câmera ampla de 12 MP, câmera ultra ampla de 10 MP e scanner
                  LiDAR para AR imersivo
                </li>
                <li>
                  Suporte para Apple Pencil (2ª geração), Magic Keyboard e Smart
                  Keyboard Folio
                </li>
              </ul>
              <video className={styles.videos} src={Ipad_vid} autoPlay loop />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 2 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(2)}
        >
          <h4>Sony Headphone</h4>
          {(showAll || activeProduct === 2) && ( // Mostrar detalhes se "showAll" for true ou se o card for ativo
            <div className={styles.cardDetails}>
              <img src={Sony_Headphone} alt="Sony Headphone" />
              <ul>
                <li>Headphone Sony WH-1000XM4, Sem fio, Noise Cancelling</li>
                <li>Marca: Sony</li>
                <li>Produto de origem: CN</li>
                <li>Composição: plástico</li>
              </ul>
              <video
                className={styles.videos}
                src={Sony_Headphone_vid}
                autoPlay
                loop
              />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 3 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(3)}
        >
          <h4>MacBook Air</h4>
          {(showAll || activeProduct === 3) && (
            <div className={styles.cardDetails}>
              <img src={MacBook_Air} />
              <ul>
                <li>
                  SUPERFINO. SUPERLEVE. SUPERCHIP M3 – O MacBook Air com chip M3
                  é um notebook com design superportátil e potência de sobra
                  para você trabalhar e se divertir com uma velocidade
                  impressionante.
                </li>
                <li>
                  DESIGN PORTÁTIL – Superleve e com cerca de 11 mm de espessura,
                  você pode levar o MacBook Air para onde quiser.
                </li>
                <li>
                  FAÇA MAIS E MAIS RÁPIDO – A poderosa CPU de 8 núcleos e a GPU
                  de até 10 núcleos do chip M3 da Apple mantêm tudo funcionando
                  com perfeição.
                </li>
                <li>
                  ATÉ 18 HORAS DE BATERIA – Bateria para o dia todo, para você
                  esquecer de carregar o carregador.
                </li>
                <li>
                  TELA DE ENCHER OS OLHOS – A tela Liquid Retina de 13,6
                  polegadas tem suporte para um bilhão de cores.
                </li>
                <li>
                  A IMAGEM IMPRESSIONA, O SOM TAMBÉM – Câmera FaceTime HD de
                  1080p, três microfones equatro alto-falantes com Áudio
                  Espacial para uma experiência incrível.
                </li>
                <li>
                  APPS QUE VOAM COM O CHIP DA APPLE – Todos os seus apps
                  favoritos, como Microsoft 365 e AdobeCreative Cloud, já rodam
                  a toda velocidade no macOS
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 4 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(4)}
        >
          <h4>Nikon DSLR</h4>
          {(showAll || activeProduct === 4) && (
            <div className={styles.cardDetails}>
              <img src={Nikon_DSLR} />
              <ul>
                <li>
                  Nascido de um desejo de desempenho emblematico e inovacAo em
                  uma camera conectada mais compacta e simplificada, o D7500
                  oferece a resolucAo da mudanca de jogo, a gama Iso, o
                  processamento de imagem e a eficiencia energetica da premiada
                  D500 em uma Dslr de nivel entusiasta. Simplificando, a D7500
                  desenvolvida para superar qualquer camera em sua classe com
                  qualidade de imagem de nivel superior, velocidade de ardencia,
                  autofoco sem falhas, video 4K Ultra Hd e ferramentas criativas
                  de nivel profissional, tudo em um design confortavel e
                  robusto. Esta e uma camera para a nova geracAo de criadores.
                </li>
              </ul>
              <video
                className={styles.videos}
                src={Nikon_DSLR_vid}
                autoPlay
                loop
              />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 5 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(5)}
        >
          <h4>Sony Playstation</h4>
          {(showAll || activeProduct === 5) && (
            <div className={styles.cardDetails}>
              <img src={Playstation} />
              <ul>
                <li>
                  Play Has No Limits Jogar Não Tem Limites PlayStation5 O
                  console PS5 oferece novas possibilidades de jogabilidade que
                  você nunca imaginou. Reproduza jogos para PS5 e PS4 em Blu-ray
                  Disc. Além disso, você também pode baixar jogos digitais para
                  PS5 e PS4 pela PlayStation Store. Experimente o carregamento
                  extremamente rápido do SSD de ultra-velocidade, uma imersão
                  mais profunda com suporte à resposta tátil, gatilhos
                  adaptáveis e áudio 3D. Além de uma geração totalmente nova de
                  jogos incríveis PlayStation.
                </li>
                <li>
                  Na velocidade da luz Aproveite o carregamento extremamente
                  rápido com o SSD de altíssima velocidade, uma imersão mais
                  profunda com suporte a feedback tátil, gatilhos adaptáveis e
                  áudio em 3D*, além de uma geração inédita de jogos incríveis
                  para PlayStation. *Áudio 3D via alto-falantes integrados da TV
                  ou fones de ouvido estéreo analógicos/USB. Configuração
                  necessária.
                </li>
                <li>
                  Jogos deslumbrantes Maravilhe-se com os gráficos incríveis e
                  experimente os recursos do novo PS5. Imersão de tirar o fôlego
                  Descubra uma experiência de jogos ainda mais profunda com a
                  ajuda da resposta tátil, dos gatilhos adaptáveis e da
                  tecnologia de áudio 3D.
                </li>
                <li>
                  Explore ambientes realistas com o Ray tracing. O Ray tracing
                  traz novos níveis de realismo com sombras naturais e reflexos
                  no suporte a jogos do PS5. Veja cores vibrantes. Com uma TV
                  HDR, os jogos compatíveis do PS5 exibem uma incrível variedade
                  de cores.
                </li>
                <li>
                  Movimente-se pelos mundos dos jogos com um realismo incrível.
                  Jogabilidade com taxa de quadros uniforme e fluída de até 120
                  fps em jogos compatíveis, com suporte para saída de 120 Hz em
                  telas 4K. Experimente gráficos 4K nítidos. Com jogos
                  compatíveis do PS5, cada pequeno detalhe ganha vida em uma TV
                  4K. Jogue mais de 4 mil jogos do PS4 em seu console PS5. Viva
                  a nostalgia de jogar seus títulos favoritos do PS4 e do PS VR
                  com a Retrocompatibilidade.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 6 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(6)}
        >
          <h4>MacBook Pro</h4>
          {(showAll || activeProduct === 6) && (
            <div className={styles.cardDetails}>
              <img src={Macbook_Pro} />
              <ul>
                <li>
                  Os processadores M1 Pro e M1 Max da Apple representam um salto
                  enorme no desempenho da CPU, GPU e aprendizagem automática.
                </li>
                <li>
                  A CPU até 10‐core oferece um desempenho até 2 vezes mais
                  rápido para executar as tarefas num instante.
                </li>
                <li>
                  GPU até 32‐core com um desempenho até 4 vezes mais rápido para
                  apps e jogos com gráficos complexos.
                </li>
                <li>
                  Neural Engine 16‐core para um desempenho de aprendizagem
                  automática até 5 vezes mais rápido.
                </li>
                <li>Maior autonomia da bateria, até 21 horas.</li>
              </ul>
              <video
                className={styles.videos}
                src={Macbook_Pro_vid}
                autoPlay
                loop
              />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 7 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(7)}
        >
          <h4>Bose Speaker</h4>
          {(showAll || activeProduct === 7) && (
            <div className={styles.cardDetails}>
              <img src={Bose_Speaker} />
              <ul>
                <li>
                  Graves profundos, som grande: seja você o DJ preferido da
                  equipe ou um amante da música com as melhores listas de
                  reprodução, o alto-falante Bluetooth Bose SoundLink Max
                  oferece graves profundos e ricos para um som que realmente
                  impressionará a festa.
                </li>
                <li>
                  Vire aonde quer que você vá: leve facilmente seu alto-falante
                  portátil Bose para qualquer ponto de encontro, a alça de corda
                  de escalada macia e removível facilita pegar o alto-falante de
                  festa para que a música viaje aonde quer que você vá.
                </li>
                <li>
                  À prova d'água e à prova de poeira: se preocupe menos com
                  quedas acidentais ou ficar preso na chuva, este alto-falante à
                  prova de poeira e à prova d'água tem classificação IP67 e
                  também é resistente a choques e ferrugem.
                </li>
                <li>
                  20 horas de vida útil da bateria*: este grande alto-falante
                  portátil oferece até 20 horas de vida útil da bateria*, para
                  que você possa ouvir suas músicas favoritas durante todo o dia
                  e noite para que a festa nunca pare.
                </li>
                <li>
                  Ligue enquanto ouve: a porta USB-C na parte traseira permite
                  que você carregue qualquer dispositivo usando a bateria
                  embutida do alto-falante, o que significa que se o
                  alto-falante Bluetooth SoundLink Max tiver energia, o mesmo
                  acontece com o seu dispositivo.
                </li>
                <li>
                  AUX embutido: o alto-falante portátil Bose SoundLink Max
                  possui uma entrada AUX embutida de 3,5 mm para que você possa
                  reproduzir facilmente músicas do seu toca-discos, CD ou MP3
                  player com uma conexão com fio.
                </li>
                <li>
                  Personalize como você ouve: usando o aplicativo Bose para
                  controlar facilmente as configurações de equalização, como
                  níveis graves, médios e agudos para personalizar perfeitamente
                  o som ou use o aplicativo para verificar a vida útil da
                  bateria e gerenciar dispositivos conectados.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 8 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(8)}
        >
          <h4>Samsung Galaxy S8</h4>
          {(showAll || activeProduct === 8) && (
            <div className={styles.cardDetails}>
              <img src={Galaxy_S8} />
              <ul>
                <li>
                  Tela infinita: uma tela frontal completa, sem moldura, de
                  ponta a ponta. A resolução padrão é Full HD+ e pode ser
                  alterada para Quad HD+ (WQHD+) nas configurações.
                </li>
                <li>
                  Resolução da câmera - Frente: 8 MP AF, Traseira: 12 MP OIS AF.
                </li>
                <li>RAM 4 GB.</li>
              </ul>
              <video
                className={styles.videos}
                src={Galaxy_S8_vid}
                autoPlay
                loop
              />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 9 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(9)}
        >
          <h4>Apple iPhone</h4>
          {(showAll || activeProduct === 9) && (
            <div className={styles.cardDetails}>
              <img src={Iphone} />
              <ul>
                <li>
                  O CONTROLE DA CÂMERA É SEU — O Controle da Câmera dá acesso
                  mais fácil e rápido às ferramentas, como zoom ou profundidade
                  de campo, para suas fotos e vídeos arrasarem também no quesito
                  agilidade.
                </li>
                <li>
                  FOTOS QUE VÃO ALÉM E CHEGAM MAIS PERTO — A câmera
                  ultra-angular com foco automático foi aprimorada para você
                  fazer fotos e vídeos macro com detalhes nítidos e
                  surpreendentes. Use a câmera Fusion de 48 MP e capture imagens
                  em alta resolução de tirar o fôlego ou abuse do zoom com a
                  qualidade óptica da teleobjetiva de 2x.
                </li>
                <li>
                  ESTILOS FOTOGRÁFICOS — A nova geração de Estilos Fotográficos
                  dá mais flexibilidade do que nunca para criar e deixar cada
                  foto ainda mais autoral. E você sempre tem a opção de reverter
                  os estilos quando quiser.
                </li>
                <li>
                  CHIP A18 SUPERINTELIGENTE — O A18 está duas gerações à frente
                  do chip A16 Bionic do iPhone 15. Ele é o grande responsável
                  por recursos avançados para fotos e vídeos e faz seu aparelho
                  praticamente virar um videogame. Tudo com eficiência
                  excepcional no consumo de energia.
                </li>
                <li>
                  MAIOR DURAÇÃO DA BATERIA — O iPhone 16 trabalha em conjunto
                  com o chip A18 e dá um grande salto na bateria, com até 22
                  horas de reprodução de vídeo. As recargas podem ser via USB-C
                  ou com um carregador MagSafe, para recargas sem fio ainda mais
                  rápidas.
                </li>
                <li>
                  FEITO PARA DURAR — O iPhone 16 tem design resistente em
                  alumínio aeroespacial com tela Super Retina XDR de 6,1
                  polegadas. A parte frontal é em Ceramic Shield de última
                  geração, duas vezes mais resistente que qualquer vidro de
                  smartphone.
                </li>
                <li>
                  EXPERIMENTE O BOTÃO DE AÇÃO — Ele leva você direto ao seu
                  recurso favorito. Mantenha pressionado para acender a
                  lanterna, gravar um lembrete, ativar o modo Silencioso ou o
                  que quiser.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 10 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(10)}
        >
          <h4>Canon DSLR</h4>
          {(showAll || activeProduct === 10) && (
            <div className={styles.cardDetails}>
              <img src={Canon_DSLR} />
              <ul>
                <li>
                  Alta qualidade de imagem com sensor CMOS de 32,5 megapixels
                  (APS-C).
                </li>
                <li>
                  Disparo contínuo de alta velocidade de até 10 fps sem atraso
                  de tempo durante a filmagem.
                </li>
                <li>Vídeo 4K UHD 30P/Full HD 120P.</li>
                <li>
                  Sistema AF de 45 pontos suporta até 27 pontos com uma medição
                  F/8.
                </li>
                <li>
                  Use o software EOS Utility Webcam Beta (Mac e Windows) para
                  transformar sua câmera Canon em uma webcam de alta qualidade,
                  ou faça o mesmo usando uma saída HDMI limpa.
                </li>
              </ul>
              <video
                className={styles.videos}
                src={Canon_DSLR_vid}
                autoPlay
                loop
              />
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 11 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(11)}
        >
          <h4>Google Pixel</h4>
          {(showAll || activeProduct === 11) && (
            <div className={styles.cardDetails}>
              <img src={Google_Pixel} />
              <ul>
                <li>
                  O Pixel 8 é o telefone útil projetado pelo Google; o novo chip
                  Google Tensor G3 é personalizado com Google AI para recursos
                  de fotos e vídeos de ponta e maneiras mais inteligentes de
                  ajudar.
                </li>
                <li>
                  O telefone Android 5G desbloqueado dá a você a flexibilidade
                  de trocar de operadora e escolher seu próprio plano de dados;
                  funciona com Google Fi, Verizon, T-Mobile, AT&T e outras
                  grandes operadoras.
                </li>
                <li>
                  Google O Pixel 8 tem uma câmera totalmente atualizada com
                  processamento de imagem avançado para revelar cores vivas e
                  detalhes impressionantes; e agora com foco macro, até mesmo os
                  menores objetos podem se tornar imagens espetaculares.
                </li>
                <li>
                  A tela Pixel 8 Actua de 6,2 polegadas é super nítida, com
                  cores ricas e vivas; é rápida e responsiva para jogos, rolagem
                  e movimentação entre aplicativos mais suaves.
                </li>
                <li>
                  A bateria adaptável da Pixel pode durar mais de 24 horas;
                  quando o Extreme Battery Saver é ligado, pode durar até 72
                  horas; e carrega mais rápido do que nunca.
                </li>
                <li>
                  O Pixel 8 pode notificar os socorristas em uma emergência e
                  compartilhar sua localização, e pode até detectar se você
                  sofreu um acidente de carro grave; se você não conseguir
                  responder, seu telefone Pixel pode ligar para os serviços de
                  emergência e notificar seus contatos escolhidos.
                </li>
                <li>
                  Com recursos de segurança poderosos, seu telefone Pixel ajuda
                  a manter suas informações seguras; o Google Tensor G3, VPN by
                  Google One e o chip de segurança Titan M2 dão ao seu Pixel
                  várias camadas de segurança.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className={`${styles.card} ${
            showAll || activeProduct === 12 ? styles.active : ""
          }`}
          onClick={() => handleCardClick(12)}
        >
          <h4>Apple Watch</h4>
          {(showAll || activeProduct === 12) && (
            <div className={styles.cardDetails}>
              <img src={Apple_Watch} />
              <ul>
                <li>
                  PORQUE APPLE WATCH SE — Todos os recursos essenciais para você
                  se movimentar, manter a conexão, monitorar sua saúde e ficar
                  em segurança. O Conjunto Inteligente e os apps redesenhados no
                  watchOS 10 mostram mais informações num instante. Com Detecção
                  de Acidente1 e métricas de treino aprimoradas, o Apple Watch
                  SE é cheio de possibilidades ao alcance do seu pulso.
                </li>
                <li>
                  NEUTRO EM CARBONO — Escolha qualquer Apple Watch SE com caixa
                  de alumínio e uma pulseira loop esportiva estelar, meia-noite
                  ou azul-inverno para ter uma combinação neutra em carbono.
                  Saiba mais sobre o compromisso da Apple com o meio ambiente em
                  apple.com/br/20302.
                </li>
                <li>
                  CONEXÃO CELULAR — Envie mensagens, faça ligações e ouça música
                  e podcasts sem seu iPhone. Adicione um plano de rede celular
                  para ter conexão em cada vez mais lugares.
                </li>
                <li>
                  RECURSOS DE SAÚDE E SEGURANÇA — Com a Detecção de Queda,
                  Detecção de Acidente e SOS de Emergência1, você recebe ajuda
                  quando mais precisa. Receba informações detalhadas sobre sua
                  saúde, como alertas em caso de frequência cardíaca muito alta
                  ou muito baixa ou de ritmo cardíaco irregular.
                </li>
                <li>
                  COMPATIBILIDADE TOTAL — O relógio funciona de forma integrada
                  com seus outros aparelhos e serviços Apple. Desbloqueie seu
                  Mac automaticamente. Localize seus aparelhos com facilidade.
                  Pague com o Apple Pay. O Apple Watch SE requer iPhone XS ou
                  posterior com iOS 17 ou posterior.
                </li>
                <li>
                  IDEAL PARA NADAR — Resistente à água até 50metros. Três cores
                  incríveis. Com a parte de trás dacaixa na mesma cor e feita
                  por meio de um novo processo de produção que reduz as emissões
                  de carbono.
                </li>
                <li>
                  FÁCIL DE PERSONALIZAR — Com pulseiras em diferentes
                  estilos,materiais,coresemostradores personalizáveis, é fácil
                  combinar com seu humor ou com o momento.
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
});

export default Details;
