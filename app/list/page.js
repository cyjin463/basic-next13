export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    return (
      <div>
        <h4>상품목록</h4>
        <div>
            {products.map((product, index) => {
                return (
                    <div>
                        <img src={`/food${index}.png`} />
                        <p>{product}</p>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
