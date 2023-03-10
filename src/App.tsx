import './App.css';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 max-w-full">
      <ProductCard
        disabled
        discount={35}
        freeGift
        freeShipping
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        price={999}
        store="Amazon"
        title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
        description="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver "
        url="https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5V3Q4S/ref=sr_1_1?dchild=1&keywords=macbook+air&qid=1616501009&sr=8-1"
      />
      <ProductCard
        discount={35}
        freeGift
        freeShipping
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        price={999}
        store="Amazon"
        title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
        description="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver "
        url="https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5V3Q4S/ref=sr_1_1?dchild=1&keywords=macbook+air&qid=1616501009&sr=8-1"
        onToggleWishlist={() => null}
      />
      <ProductCard
        coupon="COUPON"
        discount={35}
        freeGift
        freeShipping
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        price={999}
        store="Amazon"
        title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
        description="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver "
        url="https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5V3Q4S/ref=sr_1_1?dchild=1&keywords=macbook+air&qid=1616501009&sr=8-1"
      />
      <ProductCard
        wishlist
        onToggleWishlist={() => null}
        discount={35}
        freeGift
        freeShipping
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        price={999}
        store="Amazon"
        title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
        description="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver 2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver "
        url="https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5V3Q4S/ref=sr_1_1?dchild=1&keywords=macbook+air&qid=1616501009&sr=8-1"
      />
    </div>
  );
}

export default App;
