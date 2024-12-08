import Link from 'next/link';

interface buttonProps {
  text: string,
  to: string
}


export default function Button(props: buttonProps) {
  const {text, to} = props;
  return (
    <Link href={to}>
      <button className='form-btn'>
        {text}
      </button>
    </Link>
  );
};