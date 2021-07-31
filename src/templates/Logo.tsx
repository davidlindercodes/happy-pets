import { AppConfig } from '../utils/AppConfig';
import Image from 'next/image';
import logoImg from '../../public/logo.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span  className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <div className={'mr-4 ml-2 mt-2'}>
        <Image className={'mr-40'} width={50} height={50} src={logoImg} alt="Happy Pets Logo"/>
      </div>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
