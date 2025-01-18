import React, { useState, useEffect, useRef } from 'react';

const Biography = () => {
  const [showFullText, setShowFullText] = useState(false);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    paragraphRefs.current = paragraphRefs.current.slice(0, 7);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    paragraphRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 md:p-36 bg-black">
      <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h1
            style={{ fontSize: '65px', marginTop: '-95px' }}
            className="text-3xl md:text-6xl font-semibold text-white text-start mb-4"
          >
            BIYOGRAFI
          </h1>
          <div className="space-y-4 mt-7 text-lg md:text-xl text-white">
            <p
              ref={(el) => (paragraphRefs.current[0] = el)}
              className="opacity-0 fade-in transition-opacity duration-700"
            >
Lumpus, sanal dünyanın dikkat çeken figürlerinden biri olarak öne çıkan bir karakterdir. Kendine has tarzı, yaratıcı düşünce yapısı ve insanlara ilham veren girişimleriyle tanınır. Lumpus, sıradışı fikirleriyle hem bireysel hem de toplumsal düzeyde fark yaratmayı hedefleyen bir vizyoner olarak bilinir.            </p>

            <p
              ref={(el) => (paragraphRefs.current[1] = el)}
              className="opacity-0 fade-in transition-opacity duration-700"
            >
              <strong className="text-4xl">Erken Yaşam ve Eğitim</strong>
              <br></br>Lumpus'un yaşam hikayesi, sıradan bir bireyin sıra dışı bir figüre dönüşme sürecinin bir örneği olarak ilgi çeker. Çocukluk yıllarında yaratıcılığı ve öğrenme merakıyla dikkat çeken Lumpus, çeşitli alanlarda kendini geliştirmeye odaklandı. Eğitim hayatı boyunca teknoloji, sanat ve sosyal bilimler gibi farklı disiplinlerdeki başarılarıyla ön plana çıktı.
            </p>

            <p
              ref={(el) => (paragraphRefs.current[2] = el)}
              className="opacity-0 fade-in transition-opacity duration-700"
            >
              <strong className="text-4xl">Kariyer ve Başarılar</strong>
              <br></br>Lumpus, kariyerine yenilikçi projelerle başladı ve kısa sürede geniş bir kitle tarafından tanındı. Teknoloji alanında geliştirdiği projeler, sosyal sorumluluk kampanyaları ve sanata olan ilgisi sayesinde Lumpus, birçok ödüle layık görüldü. Lumpus'un çalışmaları genellikle toplumun farklı kesimlerine hitap eden kapsayıcı ve yenilikçi özelliklere sahiptir.
            </p>

            {showFullText && (
              <>
                <p
                  ref={(el) => (paragraphRefs.current[3] = el)}
                  className="opacity-0 fade-in transition-opacity duration-700"
                >
                  <strong className="text-4xl">İlham Kaynakları ve Vizyonu</strong>
                  <br></br>Lumpus, ilhamını hem doğadan hem de modern teknolojiden alır. Yenilikçi çözümleri, sürdürülebilirlik ve etik değerlerle birleştirerek insanların hayatlarını kolaylaştırmayı hedefler. Lumpus'un en büyük vizyonu, daha adil, eşit ve yaratıcı bir dünya inşa etmektir.
                </p>

                <p
                  ref={(el) => (paragraphRefs.current[4] = el)}
                  className="opacity-0 fade-in transition-opacity duration-700"
                >
                  <strong className="text-4xl">Günümüz ve Gelecek Planları</strong>
                  <br></br>Günümüzde Lumpus, global ölçekte projelere imza atmaya devam ediyor. Toplumsal değişim yaratma misyonuyla yeni fikirler ve girişimlere liderlik ediyor. Lumpus'un gelecekteki planları arasında eğitim, çevre ve teknoloji gibi alanlarda etkili projeler geliştirmek yer alıyor.
                </p>
              </>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={toggleText}
                className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700"
              >
                {showFullText ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
