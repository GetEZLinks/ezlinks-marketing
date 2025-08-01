'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from './SDKSection.module.scss';

type Platform = 'swift' | 'android' | 'react' | 'flutter';

const platforms: Array<{id: Platform, label: string, icon: string}> = [
  { id: 'swift', label: 'Swift', icon: '🍎' },
  { id: 'android', label: 'Android', icon: '🤖' },
  { id: 'react', label: 'React Native', icon: '⚛️' },
  { id: 'flutter', label: 'Flutter', icon: '🦄' }
];

const codeExamples: Record<Platform, string> = {
  swift: `<import EZLinks>

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  func application(_ application: UIApplication, did
  finishLaunchingWithOptions launchOptions:
  [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    EZLinks.initialize(appName: "PlaySquares") return true
  }
}`,
  android: `import com.ezlinks.sdk.EZLinks;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        EZLinks.initialize(this, "PlaySquares");
        EZLinks.track("app_open", null);
    }
}`,
  react: `import EZLinks from '@ezlinks/react-native';

export default function App() {
  useEffect(() => {
    EZLinks.initialize({
      appName: 'PlaySquares',
      apiKey: 'your-api-key'
    });
  }, []);
  
  return <YourApp />;
}`,
  flutter: `import 'package:ezlinks/ezlinks.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  await EZLinks.initialize(
    appName: 'PlaySquares',
    apiKey: 'your-api-key',
  );
  
  runApp(MyApp());
}`
};

export default function SDKSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>('swift');

  return (
    <section className={styles.sdkSection}>
      <div className="container">
        <motion.div 
          className={styles.sdkHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <p className={styles.sectionLabel}>CLIENT SDK</p> */}
          <div className={styles.platformIcons}>
            <span>🤖</span>
            <span>🍎</span>
            <span>⚛️</span>
            <span>🦄</span>
          </div>
        </motion.div>

        <div className={styles.sdkContent}>
          <motion.div 
            className={styles.phoneDemo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.phoneMockup}>
              <Image
                src="/playsquares-qr-demo.png"
                alt="EZLinks Mobile SDK Demo"
                width={800}
                height={800}
                className={styles.phoneImage}
              />
              <div className={styles.phonePlaceholder} style={{display: "none"}}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneHeader}>
                      <span>3:41</span>
                      <div className={styles.phoneIcons}>📶 📶 🔋</div>
                    </div>
                    <div className={styles.phoneContent}>
                      <h4>Rupesh Pandey</h4>
                      <p>rupesh</p>
                      <div className={styles.qrCode}>
                        <div className={styles.qrPattern}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.codeSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={styles.sectionLabel}>CLIENT SDK</p>
            <h3 className={styles.sdkTitle}>
              Mobile and Web SDKs and more
            </h3>
            <p className={styles.sdkDescription}>
              EZLinks drops into your stack in minutes — not weeks.
            </p>

            <div className={styles.platformTabs}>
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`${styles.platformTab} ${
                    activePlatform === platform.id ? styles.active : ''
                  }`}
                  onClick={() => setActivePlatform(platform.id)}
                >
                  <span className={styles.platformIcon}>{platform.icon}</span>
                  {platform.label}
                </button>
              ))}
            </div>

            <motion.div 
              className={styles.codeBlock}
              key={activePlatform}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <pre className={styles.codeContent}>
                <code>{codeExamples[activePlatform]}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}