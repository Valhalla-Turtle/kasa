import "../styles/taglist.scss";

function TagList({ tags }) {
    return (
      <div className='tag-list'>
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      </div>
    );
  }
  
  export default TagList;