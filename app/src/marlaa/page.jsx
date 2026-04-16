"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Хакатон хаана зохиогдох вэ?",
    answer:
      "Мэдээллийн Технологийн Үндэсний Парк 211, 302 тоот танхимд зохиогдоно.",
  },
  {
    question: "Хакатонд хэн оролцож болох вэ?",
    answer:
      "Мэдээллийн технологи, программ хангамж, дизайн болон бизнесийн чиглэлээр суралцаж буй оюутнууд болон мэргэжилтнүүд оролцох боломжтой.",
  },
  {
    question: "Хакатон хэзээ зохиогдох вэ?",
    answer:
      "Хакатон 2025 оны 5-р сарын 8-10-нд зохиогдох бөгөөд 3 өдрийн турш үргэлжлэх болно.",
  },
  {
    question: "Ямар чадвартай хүмүүс багт байх хэрэгтэй вэ?",
    answer:
      "Нэг баг дотор frontend, backend хөгжүүлэгч, дизайнер болон бизнесийн санаачлагатай гишүүн байвал хамгийн тохиромжтой.",
  },
  {
    question: "Тэмцээнд юу авч очих вэ?",
    answer:
      "Зөөврийн компьютер, цэнэглэгч болон хувийн хэрэглэлийн зүйлсээ авч ирнэ үү. Хоол, ундаа зохион байгуулагчдаас хангагдана.",
  },
  {
    question: "Хакатоны үеэр менторууд байх уу?",
    answer:
      "Тийм, туршлагатай менторууд оролцогчдод зөвлөгөө өгч, төслийг хөгжүүлэхэд тусална.",
  },
];

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "10px",
        background: open ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
        border: open
          ? "1px solid rgba(139,92,246,0.35)"
          : "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              border: "1.5px solid rgba(139,92,246,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "rgba(139,92,246,0.9)",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            ?
          </span>
          <span
            style={{
              color: open ? "#fff" : "rgba(255,255,255,0.82)",
              fontSize: "15px",
              fontWeight: open ? "600" : "400",
              letterSpacing: "0.01em",
              lineHeight: "1.4",
              fontFamily: "'Segoe UI', sans-serif",
              transition: "all 0.2s",
            }}
          >
            {question}
          </span>
        </div>
        <span
          style={{
            color: "rgba(139,92,246,0.8)",
            fontSize: "18px",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            lineHeight: 1,
          }}
        >
          ˅
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 22px 18px 54px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            lineHeight: "1.7",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d14 0%, #111827 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-60px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          background: "rgba(15,15,25,0.85)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "52px 44px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "20px",
              background: "rgba(139,92,246,0.85)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            FAQ
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "28px",
            fontWeight: "700",
            margin: "0 0 14px 0",
            fontFamily: "'Segoe UI', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Түгээмэл асуултууд
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.45)",
            fontSize: "14px",
            lineHeight: "1.7",
            margin: "0 0 40px 0",
            fontFamily: "'Segoe UI', sans-serif",
            maxWidth: "460px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Хакатонтой холбоотой түгээмэл асуулт, хариултуудыг доороос үзнэ үү.
        </p>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
