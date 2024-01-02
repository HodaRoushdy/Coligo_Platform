interface IProps {
  url: string;
  alt: string;
  className: string;
}
const Image = ({ url, alt, className }: IProps) => {
  return <img data-testid="imgElement" className={className} src={url} alt={alt} />;
};
export default Image;
