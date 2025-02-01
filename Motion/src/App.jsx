import React from 'react'
import {motion} from 'motion/react'
import './index.css'
import { useScroll } from 'motion/react'

export default function App() {

  const scrollY = useScroll().scrollYProgress;

  return (
    <>
    <motion.div 
    className='box'
    initial={{
      x:0
    }}
    animate={{
      x:[0,500,500,0,0],
      y:[0,0,500,500,0],
      rotate:[0,45,90,180,360]
    }}
    transition={{
      duration:5,
      delay:1,
      ease:'anticipate',
      // repeat:Infinity
    }}
    >
    </motion.div>

    <motion.div 
    className="box"
    drag
    dragConstraints={{
      left:0,
      right:500,
      top:0,
      bottom:300,
    }}
    dragDirectionLock='true'
    whileHover={{
      backgroundColor:'pink',
    }}
    whileTap={{
      scale:0.8
    }}
    whileDrag={{
      backgroundColor:'red',
    }}
    >
    </motion.div>

    <div className='div'>

    <motion.div className='fix'
      style={{scaleX:scrollY}}
    ></motion.div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem voluptatem delectus recusandae fugit voluptas quia mollitia laudantium officia. Accusamus ipsum magni, dolorem, delectus inventore voluptate ea quaerat doloribus sapiente omnis ad, non iure? Atque odio doloribus, reiciendis expedita dolores, veritatis tempore dicta culpa soluta numquam ex, nemo quam quis magnam accusamus quo. Alias expedita praesentium corporis in maxime impedit nobis eos ipsam fuga explicabo quidem debitis perferendis est ducimus voluptas, aspernatur atque fugiat velit magnam repudiandae. Pariatur, earum. Itaque esse assumenda necessitatibus nostrum dolorem, obcaecati consectetur suscipit fuga? Quae, eveniet! Consequuntur itaque temporibus doloribus eveniet, expedita quas debitis commodi! A aut incidunt dolorum quia, quos perspiciatis odit voluptatibus, dolores eius corporis esse provident qui voluptatem itaque vel error aperiam quas expedita et magnam. Magni officia ab voluptatibus expedita deleniti ipsam obcaecati impedit nisi aut debitis, dolorum voluptatum voluptates fuga, molestiae reprehenderit.</p>
      <br/>
    </div>
    </>
  )
}