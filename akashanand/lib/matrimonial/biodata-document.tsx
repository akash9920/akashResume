import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { matrimonialProfile } from "@/data/matrimonial-profile";

const p = matrimonialProfile;

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#30241f",
    lineHeight: 1.45,
  },
  headerRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 14,
  },
  headerMain: { flex: 1 },
  eyebrow: {
    fontSize: 8,
    color: "#7a573f",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#251a16",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    color: "#604d44",
    marginBottom: 8,
  },
  intro: {
    fontSize: 9.5,
    color: "#574740",
    lineHeight: 1.55,
  },
  photo: {
    width: 108,
    height: 132,
    objectFit: "cover",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eadfd4",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#2a1f1a",
    marginBottom: 6,
    marginTop: 10,
  },
  body: {
    fontSize: 9.5,
    color: "#5b4a42",
    lineHeight: 1.55,
    marginBottom: 5,
  },
  rowFacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 6,
    marginBottom: 4,
  },
  factCard: {
    borderWidth: 1,
    borderColor: "#eadfd4",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#fffaf5",
    minWidth: "22%",
    flexGrow: 1,
  },
  factLabel: {
    fontSize: 7,
    color: "#8b5e43",
    marginBottom: 3,
    textTransform: "uppercase",
  },
  factValue: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#2f241f",
  },
  twoCol: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  col: { flex: 1 },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  detailLabel: { width: "32%", fontSize: 8, color: "#8b5e43" },
  detailValue: { flex: 1, fontSize: 9, color: "#2f241f" },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 4,
  },
  pill: {
    borderWidth: 1,
    borderColor: "#eadfd4",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 7,
    fontSize: 8,
    color: "#46362f",
    backgroundColor: "#fffdf9",
  },
  footer: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#2d211b",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  footerLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#fff6ee",
    marginBottom: 3,
  },
  footerText: { fontSize: 8.5, color: "#f0d6c2", lineHeight: 1.45 },
});

export function BiodataDocument({ photoSrc }: { photoSrc?: string }) {
  const subtitle = `${p.coreDetails[0].value} · ${p.coreDetails[1].value} · ${p.coreDetails[2].value} · ${p.coreDetails[3].value} · ${p.coreDetails[5].value} · ${p.coreDetails[4].value}`;

  return (
    <Document title={`${p.name} — Biodata`} author={p.name} subject="Matrimonial biodata">
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <View style={styles.headerMain}>
            <Text style={styles.eyebrow}>Matrimonial biodata</Text>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.intro}>{p.headline}</Text>
            <Text style={[styles.intro, { marginTop: 6 }]}>{p.intro}</Text>
          </View>
          {photoSrc ? (
            <Image src={photoSrc} style={styles.photo} />
          ) : null}
        </View>

        <View style={styles.rowFacts}>
          {p.educationCareer.map((item) => (
            <View key={item.label} style={styles.factCard}>
              <Text style={styles.factLabel}>{item.label}</Text>
              <Text style={styles.factValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>About Akash</Text>
        <Text style={styles.body}>{p.about[0]}</Text>
        <Text style={styles.body}>{p.about[1]}</Text>
        <Text style={styles.body}>{p.about[2]}</Text>

        <Text style={styles.sectionTitle}>Lifestyle & interests</Text>
        <Text style={styles.body}>{p.about[3]}</Text>
        <View style={styles.pillRow}>
          {p.interests.map((item) => (
            <Text key={item} style={styles.pill}>
              {item}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Partner preference</Text>
        <Text style={styles.body}>{p.about[4]}</Text>

        <Text style={styles.sectionTitle}>Profile details</Text>
        <View style={styles.twoCol}>
          <View style={styles.col}>
            {p.coreDetails.slice(0, 4).map((d) => (
              <View key={d.label} style={styles.detailRow} wrap={false}>
                <Text style={styles.detailLabel}>{d.label}</Text>
                <Text style={styles.detailValue}>{d.value}</Text>
              </View>
            ))}
          </View>
          <View style={styles.col}>
            {p.coreDetails.slice(4).map((d) => (
              <View key={d.label} style={styles.detailRow} wrap={false}>
                <Text style={styles.detailLabel}>{d.label}</Text>
                <Text style={styles.detailValue}>{d.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Relationship values</Text>
        <View style={styles.pillRow}>
          {p.values.map((v) => (
            <Text key={v} style={styles.pill}>
              {v}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Family</Text>
        {p.family.map((item) => (
          <View key={item.label} wrap={false}>
            <Text style={[styles.body, { fontFamily: "Helvetica-Bold", marginTop: 4 }]}>
              {item.label}
            </Text>
            <Text style={styles.body}>{item.value}</Text>
          </View>
        ))}

        <View style={styles.footer} wrap={false}>
          <View style={{ flex: 1 }}>
            <Text style={styles.footerLabel}>Contact</Text>
            <Text style={styles.footerText}>Email: {p.contactEmail}</Text>
            <Text style={styles.footerText}>LinkedIn: {p.linkedInDisplay}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.footerLabel}>Next step</Text>
            <Text style={styles.footerText}>
              If this feels like a good match, we would be happy to connect and
              get to know your family better.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
