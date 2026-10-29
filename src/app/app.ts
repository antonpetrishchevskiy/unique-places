import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Place {
  id: number;
  name: string;
  image: string;
  category: string;
  city: string;
  country: string;
  rating: number;
  price?: string;
  tags?: string[];
  description: string;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  places: Place[] = [
    {
      id: 1,
      name: 'Aegean Hideaway',
      image: 'images/aegean_hideaway.webp',
      category: 'Отель',
      city: 'Имеровигли',
      country: 'Греция',
      rating: 5.0,
      price: '€€€',
      tags: ['Скала', 'Панорамный вид', 'Тихое место'],
      description:
        'Отель, высеченный прямо в скале над морем, где из каждого номера открывается панорамный вид на бескрайний горизонт. Пространство словно становится частью природного ландшафта, а мягкий свет и натуральные материалы создают ощущение полного покоя. Закажите прямо сейчас, и вы получите бонусом курс  по фронтенд-разработке от опытных  мастеров  из Лос-Анджелеса!',
      isExpanded: false,
    },
    {
      id: 2,
      name: 'Aqua Vista',
      image: 'images/aqua_vista.webp',
      category: 'Ресторан',
      city: 'Мале',
      country: 'Мальдивы',
      rating: 4.9,
      price: '€€',
      tags: ['Под водой', 'Вид на рыб'],
      description:
        'Ресторан на глубине 5 метров под водой с панорамным видом на бескрайний океан и его обитателей. Огромные стеклянные стены создают ощущение полного погружения: вокруг проплывают тропические рыбы, а солнечные лучи пробиваются сквозь толщу воды, создавая невероятную игру света и тени. Это место, где изысканная кухня сочетается с уникальной атмосферой подводного мира, даря гостям незабываемые впечатления от каждого ужина.',
      isExpanded: false,
    },
    {
      id: 3,
      name: 'Mist Springs',
      image: 'images/mist_springs.webp',
      category: 'SPA и релакс',
      city: 'Хаконе',
      country: 'Япония',
      rating: 4.7,
      price: '€€',
      tags: ['Лес', 'Горячие источники', 'Туман', 'Природные бассейны'],
      description:
        'Уединённый термальный комплекс среди горного леса, где природные бассейны растворяются в утреннем тумане. Природные горячие источники богаты минералами и дарят ощущение полного обновления. Вокруг — вековые деревья и тишина, нарушаемая лишь журчанием воды. Идеальное место, чтобы отключиться от городской суеты, восстановить силы и насладиться гармонией с природой.',
      isExpanded: false,
    },
    {
      id: 4,
      name: 'Skyline Cinema',
      image: 'images/skyline_cinema.png',
      category: 'Развлечения',
      city: 'Дубай',
      country: 'ОАЭ',
      rating: 4.4,
      price: '€',
      tags: ['На крыше', 'Вид на город',],
      description:
        'Кинотеатр на крыше небоскрёба, где фильмы смотрят под открытым небом на фоне сияющей панорамы ночного города.',
      isExpanded: false,
    },
    {
      id: 5,
      name: 'Echoes of Stone',
      image: 'images/echoes_of_stone.png',
      category: 'Культура',
      city: 'Матера',
      country: 'Италия',
      rating: 4.9,
      price: '€',
      tags: ['Пещеры', 'Иммерсивное искусство'],
      description: 'Галерея внутри древних пещер, где произведения искусства оживают с помощью света, звука и проекций прямо на каменных стенах.',
      isExpanded: false,
    },
    {
      id: 6,
      name: 'Aurora Glass Lodge',
      image: 'images/aurora_glass_lodge.png',
      category: 'Отель',
      city: 'Рованиеми',
      country: 'Финляндия',
      rating: 4.8,
      price: '€€',
      tags: ['Стеклянная крыша', 'Северное сияние'],
      description: 'Стеклянные домики посреди заснеженного леса, где северное сияние можно наблюдать прямо из кровати. Панорамные стены и прозрачная крыша открывают вид на звёздное небо и бескрайние снежные пейзажи, сохраняя внутри тепло и уют. ',
      isExpanded: false,
    },
  ];

  toggle(place: Place): void {
    place.isExpanded = !place.isExpanded;
  }
}
