// =============================================================================
// MANUALLY CURATED PUBLICATIONS LIST
// =============================================================================
// Edit this file directly to add / remove / reorder publications shown on the
// homepage "Recent Works" section.
//
// IMPORTANT: Do NOT run `node sync-publications.mjs` anymore — it will
// overwrite this file with whatever it pulls from Google Scholar. If you
// want auto-sync back, delete this notice and run that script.
//
// Field reference (all strings):
//   year       - e.g. "2025"  (used to sort newest first)
//   journal    - e.g. "Nature Communications"
//   title      - the paper title
//   citation   - comma-separated author list. Author surnames matching a
//                team member on the People page get bolded automatically.
//   summary    - the abstract (or a short blurb)
//   scholarUrl - the link the "View on Google Scholar" button opens
//                (you can also point this at the journal/DOI page if you
//                prefer — it's just the outbound URL)
//   image      - OPTIONAL. Path to the figure shown on the right side of the
//                card, e.g. "media/publications/dt-gpt.png". Drop your images
//                into media/publications/ and reference them here.
//                Leave as "" (empty string) to render a text-only card.
//   imageAlt   - OPTIONAL. Accessibility description for the image.
// =============================================================================

export type Publication = {
	year: string;
	journal: string;
	title: string;
	citation: string;
	summary: string;
	scholarUrl: string;
	image?: string;
	imageAlt?: string;
};

export const publications: Publication[] = [
	{
		year: "2025",
		journal: "npj Digital Medicine",
		title: "Large language models forecast patient health trajectories enabling digital twins",
		citation: "Nikita Makarov, Maria Bordukova, Papichaya Quengdaeng, Daniel Garger, Raul Rodriguez-Esteban, Fabian Schmich, Michael P Menden",
		summary: "DT-GPT is a large language model adapted to forecast patient health over time from electronic health records. It outperformed several machine-learning baselines on cancer, ICU, and Alzheimer’s datasets, while handling missing and noisy data without imputation or normalization. The model also preserved clinical relationships and could make zero-shot predictions, supporting digital twin use in trials and treatment planning.",
		scholarUrl: "https://www.nature.com/articles/s41746-025-02004-3",
		image: "media/publications/1.webp",
		imageAlt: "DT-GPT digital twin forecasting overview",
	},
	{
		year: "2023",
		journal: "Nature Communications",
		title: "The Oncology Biomarker Discovery framework reveals cetuximab and bevacizumab response patterns in metastatic colorectal cancer",
		citation: "Alexander J. Ohnmacht, Arndt Stahler, Sebastian Stintzing, Dominik P. Modest, Julian W. Holch, C. Benedikt Westphalen, Linus Hölzel, Marisa K. Schübel, Ana Galhoz, Ali Farnoud, Minhaz Ud-Dean, Ursula Vehling-Kaiser, Thomas Decker, Markus Moehler, Matthias Heinig, Volker Heinemann, Michael P. Menden",
		summary: "OncoBird framework analyzes molecular data from the FIRE-3 trial (mCRC patients on FOLFIRI + cetuximab or bevacizumab). It identifies biomarkers via genes, mutually exclusive alterations, or tumor subtypes, then tests treatment interactions. Found 5 predictive biomarkers—e.g., chr20q amplifications or no ERK mutations favor cetuximab. Applies to any molecular RCT.",
		scholarUrl: "https://www.nature.com/articles/s41467-023-41011-4",
		image: "media/publications/2.png",
		imageAlt: "OncoBird biomarker discovery framework figure",
	},
	{
		year: "2023",
		journal: "Expert Opinion on Drug Discovery",
		title: "Generative artificial intelligence empowers digital twins in drug discovery and clinical trials",
		citation: "Maria Bordukova, Nikita Makarov, Raul Rodriguez-Esteban, Fabian Schmich, Michael P. Menden",
		summary: "Digital Twins (DTs) are virtual representations of biological systems ranging from cells to entire humans that enable in silico simulations to accelerate drug discovery and advance precision medicine. Generative AI is a key technology for creating realistic DTs by generating novel, complex data with desired properties. While current DT applications remain limited to simulating few characteristics, generative AI holds transformative potential once technical and regulatory challenges are addressed.",
		scholarUrl: "https://www.tandfonline.com/doi/10.1080/17460441.2023.2273839",
		image: "media/publications/3.jpg",
		imageAlt: "Generative artificial intelligence empowers digital twins in drug discovery and clinical trials figure",
	},
	{
		year: "2022",
		journal: "Nature Communications",
		title: "Spatial transcriptomics landscape of lesions from non-communicable inflammatory skin diseases",
		citation: "A. Schäbitz, C. Hillig, M. Mubarak, M. Jargosch, A. Farnoud, E. Scala, N. Kurzen, A. C. Pilz, N. Bhalla, J. Thomas, M. Stahle, T. Biedermann, C. B. Schmidt-Weber, F. Theis, N. Garzorz-Stark, K. Eyerich, M. P. Menden, S. Eyerich",
		summary: "Spatial transcriptomics of ncISD skin yields 62,000 spatially resolved transcriptomes from 31 patients and reveals abundant but heterogeneous immune infiltrates. Pathogenic cytokine transcripts (IFNG, IL13, IL17A) are rare (>125-fold lower than other genes), yet confined to lesional skin in disease-specific patterns. Local density-based clustering shows that few cytokine transcripts trigger large responder-gene amplification cascades forming focal epidermal inflammatory clusters.",
		scholarUrl: "https://www.nature.com/articles/s41467-022-35319-w",
		image: "media/publications/4.webp",
		imageAlt: "Spatial transcriptomics skin disease figure",
	},
	{

		year: "2026",
		journal: "Preprint",
		title: "TwinWeaver: An LLM-Based Foundation Model Framework for Pan-Cancer Digital Twins",
		citation: "Nikita Makarov, Maria Bordukova, Lena Voith von Voithenberg, Estrella Pivel-Villanueva, Sabrina Mielke, Jonathan Wickes, Hanchen Wang, Mingyu Derek Ma, Keunwoo Choi, Kyunghyun Cho, Stephen Ra, Raul Rodriguez-Esteban, Fabian Schmich, Michael Menden",
		summary: "TwinWeaver is an open-source framework that converts patient histories into text for LLM-based forecasting in precision oncology. It powers Genie Digital Twin (GDT) on 93,054 patients across 20 cancers. GDT cuts forecasting error (MASE 0.87 vs. 0.97 baseline) and boosts risk prediction (C-index 0.703 vs. 0.662). It excels in trials, with strong zero-shot/fine-tuned performance and interpretable reasoning.",
		scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jBejY7cAAAAJ&sortby=pubdate&citation_for_view=jBejY7cAAAAJ:t6usbXjVLHcC",
		image: "media/publications/5.png",
		imageAlt: "TwinWeaver framework figure",
	},
];
