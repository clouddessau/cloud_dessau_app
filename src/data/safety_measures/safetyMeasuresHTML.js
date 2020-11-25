import images from './images'

const html = `
<!doctype html>
<html lang="en">
  <head>
    <title>[cloud] – Safety Measures</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <style>
      :root {
        --color-text: #000;
        --color-text_tertiary: rgba(0, 0, 0, .3);

        --color-background: #fff
      }
      
      @media (prefers-color-scheme: dark) {
        :root {
          --color-text: #fff;
          --color-text_tertiary: rgba(255, 255, 255, .4);

          --color-background: #1c1c1c
        }
      }

      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 16pt;
        color: var(--color-text);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12pt;
        background: var(--color-background)
      }

      article {
        margin: 0 auto;
        max-width: 600px
      }

      h2 {
        margin-bottom: .5em;
        font-size: 1.2em;
        font-weight: 500
      }

      p {
        margin-bottom: 1em;
        line-height: 1.4
      }

      ul {
        margin-bottom: 1em;
        margin-left: 1.5em
      }

      a {
        color: var(--color-text);
        font-weight: 600;
        text-decoration-color: var(--color-text_tertiary)
      }

      hr {
        margin: 1rem 0;
        height: 1px;
        background: var(--color-text_tertiary);
        border: none
      }

      section {
        padding: 2em 0;
        border-bottom: 1px solid var(--color-text_tertiary)
      }

      section:last-child {
        border: none
      }

      section p:last-child {
        margin-bottom: 0
      }

      .grid-illustration {
        display: grid;
        gap: 2em
      }

      .illustration {
        height: 14rem;
        background-color: var(--color-text);
        mask-position: center;
        mask-size: contain;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat
      }
    </style>

    <article>
      <h2>Entering and using the [cloud] room is only permitted for people who</h2>
      <ul>
        <li>have not been abroad during the past 14 days</li>
        <li>did not have contact with a person diagnosed with COVID-19 in the past 14 days</li>
        <li>feel well and do not have <a href="https://who.int/health-topics/coronavirus#tab=tab_3">symptoms common for COVID-19</a></li>
      </ul>
      <h2>When visiting and working at [cloud], we are asking everyone to follow these rules:</h2>
      <section>
        <div class="grid-illustration">
          <div class="illustration" style="mask-image: url(${images.qrCode.data}); -webkit-mask-image: url(${images.qrCode.data})"></div>
          <div>
            <p><strong>Scan the QR code</strong> displayed next to the door and check in with your student number. This must be repeated every <strong>1.5 hours</strong> or when you leave and re-enter the [cloud] room.</p>
            <p>In case you do not have a device capable of checking in with you, we ask you to submit your name, address, and phone number.</p>
          </div>
        </div
      </section>
      <section>
        <div class="grid-illustration">
          <div class="illustration" style="mask-image: url(${images.minimumDistance.data}); -webkit-mask-image: url(${images.minimumDistance.data})"></div>
          <div>
            <p><strong>Keep a minimum distance of 1.5 meters</strong> between yourself and others.</p>
          </div>
        </div>
      </section>
      <section>
        <div class="grid-illustration">
          <div class="illustration" style="mask-image: url(${images.peopleCount.data}); -webkit-mask-image: url(${images.peopleCount.data})"></div>
          <div>
            <p><strong>No more than 10 people</strong> are allowed to be present in the [cloud] room at the same time.</p>
          </div>
        </div>
      </section>
      <section>
        <p><strong>Use only marked workspaces</strong>.</p>
      </section>
      <section>
        <div class="grid-illustration">
          <div class="illustration" style="mask-image: url(${images.maskUsage.data}); -webkit-mask-image: url(${images.maskUsage.data})"></div>
          <div>
            <p><strong>Wear a face mask</strong>.</p>
          </div>
        </div>
      </section>
      <section>
        <div class="grid-illustration">
          <div class="illustration" style="mask-image: url(${images.cleanWorkspace.data}); -webkit-mask-image: url(${images.cleanWorkspace.data})"></div>
          <div>
            <p><strong>Clean your workspace</strong> before and after use.</p>
          </div>
        </div>
      </section>
      <section>
        <p><strong>Dress warmly</strong> anticipating the room will be well ventilated.</p>
      </section>
      <section>
        <h2>Exemptions</h2>
        <p>Some people may be exempt from wearing face masks. We kindly ask those who have an age, health, or disability reason to not wear a face mask to let the present [cloud] admin know.</p>
      </section>
      <section>
        <h2>Discord Server</h2>
        <p>We invite you to join the <a href="https://discord.gg/DjSgmyU">[cloud] Discord Server</a> to connect to fellow students, discuss, chat, and play games – even outside of the [cloud] room’s opening hours.</p>
        <p>Feel free to invite your friends to the server as well!</p>
      </section>
    </article>
  </body>
</html>
`

export default html
