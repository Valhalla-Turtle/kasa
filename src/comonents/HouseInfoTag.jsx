import HouseInfo from "./HouseInfo";
import TagList from "./TagList";

function HouseIfonTag({house}) {
  return (
    <div className='title-tag'>
    <HouseInfo house={house}/>
    <TagList tags={house.tags} />
</div>
  );
}

export default HouseIfonTag