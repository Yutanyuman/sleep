"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <nav className="fixed w-full bg-[#FFF9F5] shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-serif text-xl text-[#D35400]">
              睡眠バランス研究PROJECT
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#challenges"
                className="text-[#E67E22] hover:text-[#D35400]"
              >
                睡眠課題
              </a>
              <a
                href="#knowledge"
                className="text-[#E67E22] hover:text-[#D35400]"
              >
                睡眠知識
              </a>
              <a
                href="#balance"
                className="text-[#E67E22] hover:text-[#D35400]"
              >
                睡眠バランス
              </a>
              <a href="#expert" className="text-[#E67E22] hover:text-[#D35400]">
                専門家の声
              </a>
              <a
                href="#contact"
                className="text-[#E67E22] hover:text-[#D35400]"
              >
                お問い合わせ
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-[#E67E22]`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#FFF9F5]">
              <a href="#challenges" className="block px-3 py-2 text-[#E67E22]">
                睡眠課題
              </a>
              <a href="#knowledge" className="block px-3 py-2 text-[#E67E22]">
                睡眠知識
              </a>
              <a href="#balance" className="block px-3 py-2 text-[#E67E22]">
                睡眠バランス
              </a>
              <a href="#expert" className="block px-3 py-2 text-[#E67E22]">
                専門家の声
              </a>
              <a href="#contact" className="block px-3 py-2 text-[#E67E22]">
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section className="relative h-screen bg-[#FFF5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-6xl font-serif mb-4 text-[#D35400]">
                  睡眠バランス研究PROJECT
                </h1>
                <p className="text-xl md:text-2xl text-[#E67E22] font-sans mb-8">
                  睡眠バランスを整えて、
                  <br />
                  良質な睡眠をめざしましょう
                </p>
                <div className="absolute top-0 right-0 md:relative md:mt-4">
                  <p className="text-[#D35400] text-xl font-serif">
                    Have a good sleep!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img
                  src="https://ucarecdn.com/89bd5a8b-8b19-466a-b909-13ae3b0754fd/-/format/auto/"
                  alt="睡眠中の脳とREM・non-REMのイラスト"
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="challenges" className="py-20 bg-[#FFF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-[#D35400] text-white px-4 py-2 rounded-md">
                Sleep issues
              </div>
              <h2 className="text-3xl font-serif text-[#D35400]">睡眠課題</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif text-[#D35400] mb-4">
                  不眠大国ニッポン
                </h3>
                <h4 className="text-lg font-serif text-[#D35400] mb-4">
                  日本人の睡眠課題について
                </h4>
                <p className="text-[#E67E22] mb-4">
                  睡眠時間の少なさによるリスクを紹介します。
                </p>
                <div className="flex gap-2">
                  <span className="bg-[#FFF5EB] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #睡眠不足
                  </span>
                  <span className="bg-[#FFF5EB] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #睡眠障害
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://ucarecdn.com/373018dc-b12f-4e74-9a84-98899259b57e/-/format/auto/"
                  alt="オフィスで伸びをする女性と日本地図のイラスト"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="knowledge" className="py-20 bg-[#FFF5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-[#D35400] text-white px-4 py-2 rounded-md">
                Sleep Knowledge
              </div>
              <h2 className="text-3xl font-serif text-[#D35400]">睡眠知識</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img
                  src="https://ucarecdn.com/79415923-f331-496d-81f6-b3a2ac5a828f/-/format/auto/"
                  alt="ベッドで眠る人とZzzのイラスト"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif text-[#D35400] mb-4">
                  睡眠がもたらす効果とは!?
                </h3>
                <h4 className="text-lg font-serif text-[#D35400] mb-4">
                  レム睡眠とノンレム睡眠って何!?
                </h4>
                <p className="text-[#E67E22] mb-4">
                  睡眠の基本について紹介します。
                </p>
                <div className="flex gap-2">
                  <span className="bg-[#FFF9F5] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #睡眠の働き
                  </span>
                  <span className="bg-[#FFF9F5] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #深い睡眠
                  </span>
                  <span className="bg-[#FFF9F5] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #目覚めスッキリ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="balance" className="py-20 bg-[#FFF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-[#D35400] text-white px-4 py-2 rounded-md">
                Sleep Balance
              </div>
              <h2 className="text-3xl font-serif text-[#D35400]">
                睡眠バランス
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif text-[#D35400] mb-4">
                  質の高い睡眠には
                </h3>
                <h4 className="text-lg font-serif text-[#D35400] mb-4">
                  睡眠バランスが大事
                </h4>
                <p className="text-[#E67E22] mb-4">質の良い睡眠とは何か？</p>
                <p className="text-[#E67E22] mb-4">
                  睡眠のメカニズムと一緒に紹介します。
                </p>
                <div className="flex gap-2">
                  <span className="bg-[#FFF5EB] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #良質な睡眠
                  </span>
                  <span className="bg-[#FFF5EB] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #睡眠の仕組み
                  </span>
                  <span className="bg-[#FFF5EB] text-[#E67E22] px-3 py-1 rounded-full text-sm">
                    #睡眠の仕組み
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://ucarecdn.com/170481f0-e56a-44cd-8c82-cbd34f60e689/-/format/auto/"
                  alt="睡眠バランスを表す天秤のイラスト"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="expert" className="py-20 bg-[#FFF5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-[#D35400] mb-4">
                専門家の声
              </h2>
              <p className="text-[#E67E22] mb-8">専門家に聞きました</p>
              <p className="text-[#E67E22]">
                睡眠に関する最新研究・
                <br className="md:hidden" />
                対策や睡眠の質を下げるNG行為まで
                <br className="md:hidden" />
                専門家が解説します。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FFF9F5] p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://ucarecdn.com/7b9f37e0-4fe0-419c-8a0c-8d112621478a/-/format/auto/"
                    alt="林先生の写真"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-serif text-[#D35400] mb-2">
                    林悠 先生
                  </h3>
                  <p className="text-[#E67E22] mb-4">
                    東京大学 大学院理学系研究科生物科学専攻
                    <br />
                    攻睡眠生理学研究室教授
                    <br />
                    筑波大学国際統合睡眠医科学研究機構
                    <br />
                    客教授博士（理学）
                  </p>
                  <p className="text-[#E67E22]">
                    レム睡眠研究者に聞く。
                    <br />
                    謎多きレム睡眠の役割とは？
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF9F5] p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://ucarecdn.com/e483c450-b18b-42fa-8fba-c0663484e49e/-/format/auto/"
                    alt="友野先生の写真"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-serif text-[#D35400] mb-2">
                    友野なお 先生
                  </h3>
                  <p className="text-[#E67E22] mb-4">
                    睡眠コンサルタント
                    <br />
                    株式会社SEA Trinity代表取締役
                  </p>
                  <p className="text-[#E67E22]">
                    今の睡眠環境は課題だらけ！
                    <br />
                    質の良い睡眠を目指すには？
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#FFF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif text-[#D35400] mb-4">
              良質な睡眠の第一歩は、知ることから。
            </h2>
            <p className="text-[#E67E22] mb-8">
              睡眠の基礎知識や改善方法をまとめたガイドを、無料でお届けします。
            </p>
            <a
              href="https://www.youtube.com/results?search_query=create+ウェブサイト作成"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D35400] text-white px-8 py-3 rounded-md hover:bg-[#E67E22] transition-colors duration-300"
            >
              無料ガイドをダウンロード
            </a>
          </div>
        </section>
        <section id="news" className="py-20 bg-[#FFF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-[#D35400] mb-12">News</h2>
            <div className="space-y-6">
              <div className="border-b border-[#E67E22] pb-4">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-[#E67E22]">2023.10.06</p>
                  <p className="text-[#D35400]">
                    【調査リリース】10月9日は"熟睡の日"「週に1回以上夢を見る人」が約4割
                    意外と知らない「レム睡眠」の重要性を専門家が解説
                  </p>
                </div>
              </div>
              <div className="border-b border-[#E67E22] pb-4">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-[#E67E22]">2023.08.25</p>
                  <p className="text-[#D35400]">
                    【調査リリース】日本人の約7割が、"睡眠バランス"が乱れている可能性あり
                    睡眠に悩んでいるにも関わらず、約半数が「見て見ぬふり」している実態が明らかに
                  </p>
                </div>
              </div>
              <div className="border-b border-[#E67E22] pb-4">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-[#E67E22]">2023.08.23</p>
                  <p className="text-[#D35400]">
                    「睡眠バランス研究プロジェクト」を公開しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 bg-[#FFF5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-[#D35400] mb-4">Contact</h2>
            <p className="text-center text-[#E67E22] mb-12">
              サイトに関するお問い合わせ、取材に関するご依頼はこちらからお願いいたします。
            </p>
            <form className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="お名前"
                    className="w-full px-4 py-2 border border-[#E67E22] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 border border-[#E67E22] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="お問い合わせ内容"
                    className="w-full px-4 py-2 border border-[#E67E22] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D35400] bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D35400] text-white px-8 py-3 rounded-md hover:bg-[#E67E22] transition-colors duration-300"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </section>
        <footer className="bg-[#FFF9F5] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#E67E22]">
            <p>&copy; 2025 睡眠バランス研究PROJECT. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default MainComponent;