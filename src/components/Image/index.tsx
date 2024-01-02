import { IImgProps } from "../interfaces";

const Image = ({ url, alt, className }: IImgProps) => {
  return <img data-testid="imgElement" className={className} src={url} alt={alt} />
};
export default Image;
