import { motion } from "framer-motion";

export default function Chapter1Slide() {
  return (
    <div className="p-8 space-y-8">
      {/* Slide 1: Title Slide */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
        <h2 className="text-4xl font-bold">Chapter 1</h2>
        <h1 className="text-5xl font-extrabold mt-4">Introduction to Bioinformatics</h1>
        <h3 className="text-2xl mt-2 text-muted-foreground">and Brief History of the Field</h3>
      </motion.div>

      {/* Slide 2: Opening Summary */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="bg-blue-50 rounded-xl shadow p-6">
          <p className="text-xl">
            Computers and software have become essential in biology. From routine sequence analysis to parsing massive datasets, bioinformatics has transformed how we study genetics, disease, and ecology. While often seen as a recent response to NGS data, bioinformatics actually began over 50 years ago.
          </p>
        </div>
      </motion.div>

      {/* Slide 3: Chapter Overview */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">What You'll Learn in This Chapter:</h3>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Definition and scope of bioinformatics</li>
            <li>Historical timeline and major milestones</li>
            <li>Key figures like Margaret Dayhoff</li>
            <li>Tools and technologies from 1960s to now</li>
            <li>Current trends and applications</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 4: What is Bioinformatics? */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="bg-green-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">What is Bioinformatics?</h3>
          <p className="text-lg mb-4">
            Bioinformatics is the interdisciplinary field that develops methods and software tools for understanding biological data. It combines biology, computer science, and statistics to analyze sequences, structures, and functions of genes and proteins.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>Analyzes genomic, proteomic, transcriptomic, and metabolomic data</li>
            <li>Supports biological discoveries and clinical applications</li>
            <li>Enables large-scale data interpretation and visualization</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 5: Origins of Bioinformatics */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <div className="bg-yellow-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">Origins of Bioinformatics</h3>
          <p className="text-lg mb-4">
            Long before DNA sequencing, bioinformatics began with protein sequence analysis. In the 1950s and 60s, scientists used early computers to assemble protein data derived from methods like Edman degradation. This set the stage for sequence databases, algorithms, and computational biology.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>1950s: Insulin became the first sequenced protein</li>
            <li>Margaret Dayhoff developed the first sequence database and the one-letter amino acid code</li>
            <li>COMPROTEIN software—coded on punch cards—helped automate sequence assembly</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 6: Molecular Evolution and Sequence Comparison */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <div className="bg-purple-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">Molecular Evolution and Sequence Comparison</h3>
          <p className="text-lg mb-4">
            The recognition that protein sequences evolve and can be compared across species laid the foundation for molecular phylogenetics. This led to the development of algorithms like Needleman–Wunsch for alignment and Dayhoff's PAM matrices to score evolutionary changes.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>Protein sequences as evolutionary records</li>
            <li>Needleman–Wunsch algorithm (1970)</li>
            <li>PAM matrices and substitution models</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 7: DNA Sequencing and Early Tools */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <div className="bg-red-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">DNA Sequencing and Early Tools</h3>
          <p className="text-lg mb-4">
            The invention of Sanger sequencing revolutionized molecular biology. Software like the Staden Package automated sequence assembly, helping researchers manage the rapidly increasing data from DNA sequencing.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>Sanger sequencing (1977)</li>
            <li>Maxam-Gilbert chemistry</li>
            <li>Staden Package and GCG suite</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 8: The Genomic Era and Human Genome Project */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="bg-indigo-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">The Genomic Era and Human Genome Project</h3>
          <p className="text-lg mb-4">
            The Human Genome Project (1990–2003) marked a turning point in bioinformatics, requiring new tools for large-scale assembly, annotation, and data storage. It fostered public databases like GenBank and ushered in the age of comparative genomics.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>Public-private sequencing efforts</li>
            <li>GenBank, EMBL, DDBJ databases</li>
            <li>Bioinformatics tools like BLAST and PHRAP</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 9: Tools and Applications Today */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <div className="bg-orange-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">Modern Tools and Applications</h3>
          <p className="text-lg mb-4">
            Today’s bioinformatics encompasses cloud computing, AI integration, and real-time genomic surveillance. Tools like Galaxy, Bioconductor, and AlphaFold illustrate the field’s expansion into visualization, statistics, and structural biology.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>Galaxy, Bioconductor, UniProt, IGV</li>
            <li>NGS analysis and variant calling pipelines</li>
            <li>AI and structural modeling (e.g., AlphaFold)</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 10: Key Figures and Timeline */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <div className="bg-cyan-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">Key Figures and Timeline</h3>
          <p className="text-lg mb-4">
            Many scientists shaped the field of bioinformatics. This timeline shows major events and contributors, from Margaret Dayhoff to the launch of large-scale genomics and systems biology.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>1965: Dayhoff’s Atlas of Protein Sequence and Structure</li>
            <li>1977: Sanger sequencing method</li>
            <li>2003: Completion of Human Genome Project</li>
          </ul>
        </div>
      </motion.div>

      {/* Slide 11: Ethics and Future Directions */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="bg-gray-50 rounded-xl shadow p-6">
          <h3 className="text-3xl font-bold mb-4">Ethics and the Future of Bioinformatics</h3>
          <p className="text-lg mb-4">
            As bioinformatics grows, ethical issues surrounding data privacy, equity, and accessibility are becoming more important. The field is also evolving toward integrative multi-omics, real-time tracking, and personalized medicine.
          </p>
          <ul className="list-disc ml-6 text-md space-y-2">
            <li>FAIR data principles</li>
            <li>Genomic privacy and consent</li>
            <li>Precision medicine and digital biology</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
