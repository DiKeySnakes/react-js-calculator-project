import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
  return (
    <div id='footer'>
      <footer>
        <p>
          Created by DiKeySnakes for
          <a
            href='https://www.freecodecamp.org/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            freeCodeCamp{' '}
            <FontAwesomeIcon icon={brands('free-code-camp')} beat />
          </a>{' '}
          curriculum
        </p>
        <p>
          Copyright © DiKeySnakes 2023
          <a
            href='https://github.com/DiKeySnakes/react-js-calculator-project'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            <FontAwesomeIcon id='githubIcon' icon={brands('github')} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
