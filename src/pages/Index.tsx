import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [onlinePlayers] = useState(1247);
  const [maxPlayers] = useState(2000);

  const topPlayers = [
    { id: 1, name: "Ivan_Petrov", level: 125, money: 15000000, rank: "Бизнесмен" },
    { id: 2, name: "Sergey_Ivanov", level: 118, money: 12500000, rank: "Авторитет" },
    { id: 3, name: "Dmitriy_Smirnov", level: 112, money: 11200000, rank: "Вор в Законе" },
    { id: 4, name: "Alex_Kozlov", level: 108, money: 9800000, rank: "Авторитет" },
    { id: 5, name: "Maxim_Sokolov", level: 105, money: 8900000, rank: "Боец" },
  ];

  const vipPackages = [
    {
      name: "VIP Bronze",
      price: "299₽",
      features: ["×1.5 опыт", "×1.3 зарплата", "Эксклюзивный транспорт", "Приоритет входа"],
      color: "from-amber-600 to-amber-800"
    },
    {
      name: "VIP Silver",
      price: "599₽",
      features: ["×2 опыт", "×1.5 зарплата", "Уникальные скины", "Приоритет 1 уровня", "VIP чат"],
      color: "from-slate-400 to-slate-600",
      popular: true
    },
    {
      name: "VIP Gold",
      price: "999₽",
      features: ["×3 опыт", "×2 зарплата", "Все скины", "Приоритет макс", "Кастомные команды"],
      color: "from-yellow-500 to-yellow-700"
    },
  ];

  const news = [
    {
      id: 1,
      title: "Обновление 2.5: Новая система бизнеса",
      date: "23 Ноября 2025",
      description: "Добавлена возможность создавать собственные компании и нанимать игроков"
    },
    {
      id: 2,
      title: "Ивент: Гонки на выживание",
      date: "20 Ноября 2025",
      description: "Участвуйте в масштабных гонках и получайте уникальные награды"
    },
    {
      id: 3,
      title: "Акция на донат -30%",
      date: "18 Ноября 2025",
      description: "Специальное предложение на все VIP пакеты до конца месяца"
    },
  ];

  const rules = [
    {
      category: "Игровые правила",
      items: [
        "Запрещён DeathMatch без причины",
        "Запрещён CarKill и CarRam без РП причины",
        "Запрещено оскорбление администрации",
        "Запрещён NonRP отыгровки",
      ]
    },
    {
      category: "Донат правила",
      items: [
        "Запрещена передача VIP статуса другим игрокам",
        "Возврат средств невозможен после активации",
        "VIP не даёт права на нарушение правил",
      ]
    },
    {
      category: "Античит",
      items: [
        "Использование читов - перманентный бан",
        "Багоюз - бан от 30 дней",
        "Дюп предметов - перманентный бан",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold glow-green">RADMIR RP</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
            <a href="#donate" className="hover:text-primary transition-colors">Донат</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#top" className="hover:text-primary transition-colors">Топ игроков</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Play" className="mr-2" size={16} />
            Играть
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 glow-green animate-pulse-slow">
            RADMIR RP
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Легендарный ролевой сервер GTA SAMP
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-primary/20 text-primary border-primary">
              <Icon name="Users" className="mr-2" size={20} />
              Онлайн: {onlinePlayers}/{maxPlayers}
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-secondary/20 text-secondary border-secondary">
              <Icon name="Server" className="mr-2" size={20} />
              IP: server.radmir.com:7777
            </Badge>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-transform">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать SAMP
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Discord
            </Button>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 glow-pink">
            <Icon name="Scale" className="inline mr-3" size={40} />
            Правила сервера
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rules.map((ruleCategory, idx) => (
              <Card key={idx} className="gradient-border bg-card hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{ruleCategory.category}</h3>
                  <ul className="space-y-2">
                    {ruleCategory.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="AlertCircle" className="mt-0.5 text-secondary flex-shrink-0" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 glow-blue">
            <Icon name="Crown" className="inline mr-3" size={40} />
            VIP Привилегии
          </h2>
          <p className="text-center text-muted-foreground mb-12">Поддержи сервер и получи эксклюзивные возможности</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vipPackages.map((pkg, idx) => (
              <Card key={idx} className={`gradient-border bg-card hover:scale-105 transition-transform ${pkg.popular ? 'ring-2 ring-secondary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-black mb-6 text-primary">{pkg.price}</div>
                  <ul className="space-y-3 mb-6 text-left">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-transform">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 glow-green">
            <Icon name="Newspaper" className="inline mr-3" size={40} />
            Новости
          </h2>
          <div className="space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="gradient-border bg-card hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <Badge variant="secondary" className="bg-muted">
                      <Icon name="Calendar" className="mr-1" size={12} />
                      {item.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="top" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 glow-pink">
            <Icon name="Trophy" className="inline mr-3" size={40} />
            Топ игроков
          </h2>
          <Tabs defaultValue="level" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="level">По уровню</TabsTrigger>
              <TabsTrigger value="money">По деньгам</TabsTrigger>
              <TabsTrigger value="playtime">По времени</TabsTrigger>
            </TabsList>
            <TabsContent value="level">
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <Card key={player.id} className="gradient-border bg-card hover:scale-105 transition-transform">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl font-black ${
                          player.id === 1 ? 'text-yellow-500' : 
                          player.id === 2 ? 'text-slate-400' : 
                          player.id === 3 ? 'text-amber-700' : 'text-muted-foreground'
                        }`}>
                          #{player.id}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{player.name}</div>
                          <div className="text-sm text-muted-foreground">{player.rank}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-primary/20 text-primary border-primary mb-2">
                          Уровень {player.level}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          ${player.money.toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="money">
              <div className="text-center text-muted-foreground py-12">
                Статистика по деньгам загружается...
              </div>
            </TabsContent>
            <TabsContent value="playtime">
              <div className="text-center text-muted-foreground py-12">
                Статистика по времени игры загружается...
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 glow-green">RADMIR RP</h3>
          <p className="text-muted-foreground mb-6">Легендарный ролевой сервер с 2010 года</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Globe" size={24} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 RADMIR RP. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
