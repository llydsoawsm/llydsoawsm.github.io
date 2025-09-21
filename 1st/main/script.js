// Enhanced Timeline Data with photos and letters - More Events!
const timelineData = [
	{
		date: '2018',
		title: 'First Meeting',
		desc: 'The day our eyes first met and everything changed.',
		color: '#667eea',
		icon: '👀',
		photo: '1st/photos/photo1.jpg',
		letter: {
			title: 'The Beginning',
			content: `My dearest love,<br><br>
			Remember that magical day when our eyes first met? It feels like yesterday, yet it feels like forever. That moment changed everything - it was the day I found my missing piece.<br><br>
			You walked into my life like sunshine breaking through clouds, bringing warmth and light to places I didn't even know were dark. Your smile became my favorite sight, your laugh my favorite sound.<br><br>
			This is where our beautiful story began, and I wouldn't change a single moment of it.`,
			signature: 'With all my love, Your Partner ❤️'
		}
	},
	{
		date: '2018',
		title: 'First Date',
		desc: 'Our first official date - butterflies and endless conversations.',
		color: '#764ba2',
		icon: '🌹',
		photo: '1st/photos/2018b.jpg',
		letter: {
			title: 'Butterflies & Dreams',
			content: `My beautiful date,<br><br>
			That first date was everything I hoped it would be and so much more. The butterflies in my stomach, the way time seemed to stand still when I was with you, the endless conversations that felt like we could talk forever.<br><br>
			I knew from that moment that you were someone special, someone I wanted to know everything about. Your laugh, your stories, your dreams - they all captivated me completely.<br><br>
			Thank you for that perfect first date that started it all.`,
			signature: 'Your nervous but excited date 💕'
		}
	},
	{
		date: '2019',
		title: 'First Kiss',
		desc: 'The moment that sealed our fate together.',
		color: '#f093fb',
		icon: '💋',
		photo: '1st/photos/2019.jpg',
		letter: {
			title: 'Sealed with a Kiss',
			content: `My first kiss,<br><br>
			That first kiss was like fireworks exploding in my heart. Time stopped, the world disappeared, and it was just you and me in that perfect moment.<br><br>
			I knew then that this was real, that what we had was something magical and rare. Your lips against mine felt like coming home, like finding the missing piece of my soul.<br><br>
			That kiss changed everything - it was the moment I knew I was falling in love with you.`,
			signature: 'Your first kiss 💋✨'
		}
	},
	{
		date: '2019',
		title: 'First Trip',
		desc: 'Our first adventure together - exploring new places.',
		color: '#4facfe',
		icon: '✈️',
		photo: '1st/photos/2019b.jpg',
		letter: {
			title: 'Adventure Together',
			content: `My adventurous soul,<br><br>
			Our first trip together was everything I dreamed it would be and so much more. Every new place we discovered became magical because we discovered it together.<br><br>
			I loved watching your eyes light up with wonder at each new sight, your excitement contagious and pure. We weren't just traveling to places - we were building our own little world wherever we went.<br><br>
			Thank you for making every adventure feel like home, just because you were there.`,
			signature: 'Your travel companion ✈️💕'
		}
	},
	{
		date: '2020',
		title: 'First "I Love You"',
		desc: 'The words that changed everything between us.',
		color: '#43e97b',
		icon: '💕',
		photo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNjY3ZWVhIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIj7wn5mUIEZpcnN0IE1lZXRpbmc8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMzIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIj4yMDE4PC90ZXh0Pgo8L3N2Zz4K',
		letter: {
			title: 'Three Little Words',
			content: `My love,<br><br>	
			Those three little words changed everything. "I love you" - simple words that carry the weight of the universe, the depth of oceans, the warmth of a thousand suns.<br><br>
			Saying them to you felt like the most natural thing in the world, like breathing, like my heart beating. And hearing them back from you was like coming home to a place I never knew existed.<br><br>
			Thank you for loving me back, for making my heart complete.`,
			signature: 'Your love 💕💕💕'
		}
	},
	{
		date: '2020',
		title: 'Overcoming Challenges',
		desc: 'Faced obstacles together and came out stronger.',
		color: '#fa709a',
		icon: '💪',
		photo: '1st/photos/2020b.jpg',
		letter: {
			title: 'Stronger Together',
			content: `My strength, my rock,<br><br>
			When the world felt uncertain and scary, you were my constant. Through every challenge, every difficult moment, you stood by my side with unwavering love and support.<br><br>
			You taught me that love isn't just about the good times - it's about being each other's shelter in the storm. You held my hand when I was scared, made me laugh when I wanted to cry, and reminded me that together, we could face anything.<br><br>
			Thank you for being my anchor when the seas were rough.`,
			signature: 'Your partner in everything 💪❤️'
		}
	},
	{
		date: '2021',
		title: 'Moving In',
		desc: 'The day we became roommates and started building our home.',
		color: '#ff6b6b',
		icon: '🏠',
		photo: '1st/photos/2021.jpg',
		letter: {
			title: 'Our Home',
			content: `My home, my heart,<br><br>
			The day we moved in together, I knew I was exactly where I belonged. Every morning waking up next to you, every evening cooking together, every lazy Sunday spent in our little sanctuary - these became my favorite moments.<br><br>
			You turned a house into our home, filled it with love, laughter, and countless memories. Every corner holds a story of us, every room echoes with our shared dreams.<br><br>
			Thank you for making every day feel like coming home.`,
			signature: 'Your home is my heart 🏠💕'
		}
	},
	{
		date: '2022',
		title: 'First Anniversary',
		desc: 'Celebrating one year of love and countless memories.',
		color: '#4ecdc4',
		icon: '🎂',
		photo: '1st/photos/2022.jpg',
		letter: {
			title: 'One Year of Magic',
			content: `My anniversary love,<br><br>
			One year of you, one year of us, one year of the most beautiful love story I could have ever imagined. Every day with you has been a gift, every moment a treasure.<br><br>
			We've laughed together, cried together, grown together, and loved together. You've made every ordinary day extraordinary, every moment magical.<br><br>
			Here's to our first year and to many, many more years of love ahead.`,
			signature: 'Your anniversary sweetheart 🎂💖'
		}
	},
	{
		date: '2023',
		title: 'Major Milestone',
		desc: 'A big achievement that brought us even closer.',
		color: '#45b7d1',
		icon: '🎉',
		photo: '1st/photos/2023.jpg',
		letter: {
			title: 'Celebrating Us',
			content: `My celebration, my joy,<br><br>
			This milestone wasn't just about what we achieved - it was about celebrating who we've become together. Every challenge we've faced, every dream we've chased, every moment we've shared has led us here.<br><br>
			I'm so proud of us, of our journey, of the love we've built. You've been my biggest cheerleader, my greatest supporter, and my most beautiful inspiration.<br><br>
			Here's to many more celebrations together, my love.`,
			signature: 'Your proudest supporter 🎉💖'
		}
	},
	{
		date: '2024',
		title: 'Growing Together',
		desc: 'Another year of love, growth, and shared dreams.',
		color: '#96ceb4',
		icon: '🌱',
		photo: '1st/photos/2024.jpg',
		letter: {
			title: 'Growing in Love',
			content: `My growing love,<br><br>
			Like a beautiful garden, our love keeps growing stronger, deeper, more beautiful with each passing day. We've learned to nurture each other, to grow together, to bloom in each other's light.<br><br>
			Every challenge has made us stronger, every joy has made us happier, every moment has made us more in love. We're not just growing older together - we're growing better together.<br><br>
			Thank you for growing with me, for growing into the most amazing partner I could have ever dreamed of.`,
			signature: 'Your growing love 🌱💕'
		}
	},
	{
		date: '2025',
		title: 'Today',
		desc: 'Still growing, learning, and loving every moment together.',
		color: '#feca57',
		icon: '💖',
		photo: '1st/photos/2025.jpg',
		letter: {
			title: 'Forever & Always',
			content: `My forever, my always,<br><br>
			Today, tomorrow, and every day after - I choose you. I choose us. I choose this beautiful life we've built together, filled with love, laughter, and endless possibilities.<br><br>
			Every morning I wake up grateful that you're mine, every night I fall asleep dreaming of our future together. You are my greatest adventure, my sweetest dream, my most beautiful reality.<br><br>
			I love you more than words can say, more than time can measure, more than forever can hold.`,
			signature: 'Yours forever and always 💖✨'
		}
	},
	{
		date: '2018',
		title: 'First Laugh',
		desc: 'The moment your laugh became my favorite sound.',
		color: '#ff9ff3',
		icon: '😂',
		photo: '1st/photos/2018c.jpg',
		letter: {
			title: 'Your Laugh',
			content: `My joy, my happiness,<br><br>
			That first time I made you laugh - really laugh - it was like discovering the most beautiful melody in the world. Your laugh became my favorite sound, my daily dose of happiness.<br><br>
			I love how your eyes crinkle when you laugh, how you throw your head back, how contagious your joy is. Making you laugh became my favorite hobby, my greatest achievement.<br><br>
			Thank you for sharing your laughter with me.`,
			signature: 'Your comedian 😂💕'
		}
	},
	{
		date: '2019',
		title: 'First Fight',
		desc: 'Our first disagreement and how we worked through it.',
		color: '#ff6b6b',
		icon: '🤝',
		photo: '1st/photos/2019c.jpg',
		letter: {
			title: 'Stronger Together',
			content: `My partner in growth,<br><br>
			Our first fight taught me that love isn't about never disagreeing - it's about how we work through our differences together. You showed me that conflict can bring us closer when handled with love and respect.<br><br>
			I learned that we're stronger together, even when we disagree. You taught me that love means choosing us over being right, choosing understanding over winning.<br><br>
			Thank you for teaching me how to love better.`,
			signature: 'Your growing partner 🤝❤️'
		}
	},
	{
		date: '2020',
		title: 'First Surprise',
		desc: 'The first time I surprised you and saw your beautiful reaction.',
		color: '#a8e6cf',
		icon: '🎁',
		photo: '1st/photos/2020c.jpg',
		letter: {
			title: 'Your Surprise',
			content: `My beautiful surprise,<br><br>
			Planning that first surprise for you was one of my favorite memories. The anticipation, the excitement, the way your face lit up when you realized what was happening - pure magic.<br><br>
			I love how you react to surprises, how your eyes sparkle with wonder, how you get that adorable look of disbelief. Making you happy became my greatest joy.<br><br>
			Here's to many more surprises and the joy they bring us both.`,
			signature: 'Your surprise planner 🎁✨'
		}
	},
	{
		date: '2021',
		title: 'First Pet',
		desc: 'The day we got our first pet together.',
		color: '#ffd93d',
		icon: '🐾',
		photo: '1st/photos/2021b.jpg',
		letter: {
			title: 'Our Little Family',
			content: `My co-parent,<br><br>
			The day we brought home our first pet together, I knew our family was growing. Watching you care for our little one with such love and tenderness made me fall in love with you all over again.<br><br>
			You're such a natural caregiver, so patient and loving. Our pet became another way we bonded, another shared responsibility that brought us closer together.<br><br>
			Thank you for being such an amazing co-parent to our furry family member.`,
			signature: 'Your co-parent 🐾💕'
		}
	},
	{
		date: '2022',
		title: 'First Holiday',
		desc: 'Our first holiday celebration together as a couple.',
		color: '#ff8a80',
		icon: '🎄',
		photo: '1st/photos/2022b.jpg',
		letter: {
			title: 'Holiday Magic',
			content: `My holiday love,<br><br>
			Our first holiday together was magical. Decorating, cooking, creating traditions - everything felt more special because we were doing it together. You made the holidays feel like home.<br><br>
			I love how you get excited about traditions, how you make everything feel festive and warm. Our holiday celebrations became some of my favorite memories.<br><br>
			Thank you for making every holiday magical and meaningful.`,
			signature: 'Your holiday partner 🎄💖'
		}
	},
	{
		date: '2023',
		title: 'First Project',
		desc: 'The first big project we tackled together.',
		color: '#81c784',
		icon: '🔨',
		photo: '1st/photos/2023b.jpg',
		letter: {
			title: 'Teamwork Makes the Dream Work',
			content: `My project partner,<br><br>
			Working on our first big project together showed me how well we complement each other. Your creativity, my organization, your vision, my execution - we make an amazing team.<br><br>
			I love how we problem-solve together, how we support each other through challenges, how we celebrate our successes as a team. We're unstoppable when we work together.<br><br>
			Thank you for being my perfect partner in everything we do.`,
			signature: 'Your teammate 🔨💪'
		}
	},
	{
		date: '2024',
		title: 'First Adventure',
		desc: 'Our first big adventure and the memories we made.',
		color: '#64b5f6',
		icon: '🗺️',
		photo: '1st/photos/2024b.jpg',
		letter: {
			title: 'Adventure Awaits',
			content: `My adventure buddy,<br><br>
			Our first big adventure together was everything I dreamed it would be. The planning, the excitement, the unexpected moments, the memories we made - it was perfect because we did it together.<br><br>
			I love how you embrace new experiences, how you find joy in the journey, how you make every adventure feel like a grand exploration. With you, every day is an adventure.<br><br>
			Here's to many more adventures and the stories we'll tell.`,
			signature: 'Your adventure partner 🗺️🌟'
		}
	},
	{
		date: '2025',
		title: 'Future Dreams',
		desc: 'All the dreams we have for our future together.',
		color: '#ba68c8',
		icon: '🌈',
		photo: '1st/photos/2025b.jpg',
		letter: {
			title: 'Our Future',
			content: `My dream partner,<br><br>
			Dreaming about our future together is one of my favorite things to do. All the places we'll go, the experiences we'll have, the memories we'll make - I can't wait to live them all with you.<br><br>
			Your dreams have become my dreams, your goals my goals. Together, we can achieve anything we set our minds to. Our future is bright because we're facing it together.<br><br>
			Thank you for sharing your dreams with me and making them ours.`,
			signature: 'Your future 💫🌈'
		}
	}
];

// Global variables
let particles = [];
let isMouseMoving = false;
let mousePosition = { x: 0, y: 0 };
let animationFrameId = null;

// Particle system
class Particle {
	constructor(x, y, color = '#ffffff') {
		this.x = x;
		this.y = y;
		this.vx = (Math.random() - 0.5) * 2;
		this.vy = (Math.random() - 0.5) * 2;
		this.life = 1;
		this.decay = Math.random() * 0.02 + 0.005;
		this.size = Math.random() * 3 + 1;
		this.color = color;
		this.opacity = Math.random() * 0.8 + 0.2;
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.life -= this.decay;
		this.opacity = this.life * 0.8;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	draw(ctx) {
		ctx.save();
		ctx.globalAlpha = this.opacity;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}

	isDead() {
		return this.life <= 0;
	}
}

// Create floating particles
function createFloatingParticles() {
	const particlesContainer = document.getElementById('particles');
	if (!particlesContainer) return;

	for (let i = 0; i < 50; i++) {
		const particle = document.createElement('div');
		particle.className = 'particle';
		particle.style.left = Math.random() * 100 + '%';
		particle.style.animationDelay = Math.random() * 8 + 's';
		particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
		particlesContainer.appendChild(particle);
	}
}

// Enhanced 3D Timeline Rendering
function render3DTimeline() {
	const orbsContainer = document.getElementById('timeline-orbs');
	if (!orbsContainer) return;

	orbsContainer.innerHTML = '';

	// Responsive layout calculations
	const w = orbsContainer.offsetWidth;
	const h = orbsContainer.offsetHeight;
	const cx = w / 2;
	const cy = h * 0.55;
	const r = Math.min(w, h) * 0.35;
	const orbSize = Math.max(40, Math.min(w, h) * 0.08);

	// Calculate random positions with collision detection
	const orbPositions = [];
	const margin = 80; // Keep orbs away from edges
	const minDistance = 120; // Minimum distance between orbs
	const maxAttempts = 100; // Maximum attempts to find a valid position
	
	for (let i = 0; i < timelineData.length; i++) {
		let attempts = 0;
		let validPosition = false;
		let position;
		
		while (!validPosition && attempts < maxAttempts) {
			// Generate random position
			const randomX = margin + Math.random() * (w - 2 * margin);
			const randomY = margin + Math.random() * (h - 2 * margin);
			
			position = {
				x: randomX,
				y: randomY,
				index: i
			};
			
			// Check if this position is far enough from existing orbs
			validPosition = true;
			for (let j = 0; j < orbPositions.length; j++) {
				const existingPos = orbPositions[j];
				const distance = Math.sqrt(
					Math.pow(position.x - existingPos.x, 2) + 
					Math.pow(position.y - existingPos.y, 2)
				);
				
				if (distance < minDistance) {
					validPosition = false;
					break;
				}
			}
			
			attempts++;
		}
		
		// If we couldn't find a valid position, use the last generated one
		orbPositions.push(position);
	}

	// Don't create connections - orbs float freely

	// Create enhanced orbs with varied sizes and effects
	createEnhancedOrbs(orbsContainer, orbPositions, orbSize);

	// Setup enhanced interactions
	setupEnhancedInteractions(orbsContainer);
}

// Create enhanced SVG connections with flowing energy
function createEnhancedConnections(svg, positions) {
	const gradId = 'orb-connector-gradient';
	const energyGradId = 'energy-gradient';
	
	// Create gradients
	const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
	
	// Main gradient
	const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
	grad.setAttribute('id', gradId);
	grad.setAttribute('x1', '0%');
	grad.setAttribute('y1', '0%');
	grad.setAttribute('x2', '100%');
	grad.setAttribute('y2', '0%');
	
	const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	stop1.setAttribute('offset', '0%');
	stop1.setAttribute('stop-color', '#667eea');
	
	const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	stop2.setAttribute('offset', '50%');
	stop2.setAttribute('stop-color', '#764ba2');
	
	const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	stop3.setAttribute('offset', '100%');
	stop3.setAttribute('stop-color', '#f093fb');
	
	grad.appendChild(stop1);
	grad.appendChild(stop2);
	grad.appendChild(stop3);
	defs.appendChild(grad);

	// Energy flow gradient
	const energyGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
	energyGrad.setAttribute('id', energyGradId);
	energyGrad.setAttribute('x1', '0%');
	energyGrad.setAttribute('y1', '0%');
	energyGrad.setAttribute('x2', '100%');
	energyGrad.setAttribute('y2', '0%');
	
	const energyStop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	energyStop1.setAttribute('offset', '0%');
	energyStop1.setAttribute('stop-color', '#ffffff');
	energyStop1.setAttribute('stop-opacity', '0');
	
	const energyStop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	energyStop2.setAttribute('offset', '50%');
	energyStop2.setAttribute('stop-color', '#ffffff');
	energyStop2.setAttribute('stop-opacity', '0.8');
	
	const energyStop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	energyStop3.setAttribute('offset', '100%');
	energyStop3.setAttribute('stop-color', '#ffffff');
	energyStop3.setAttribute('stop-opacity', '0');
	
	energyGrad.appendChild(energyStop1);
	energyGrad.appendChild(energyStop2);
	energyGrad.appendChild(energyStop3);
	defs.appendChild(energyGrad);

	svg.appendChild(defs);

	// Create connection paths
	for (let i = 0; i < positions.length - 1; i++) {
		const p1 = positions[i];
		const p2 = positions[i + 1];
		const mx = (p1.x + p2.x) / 2;
		const my = (p1.y + p2.y) / 2 - 30;

		// Main connection path
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', `M${p1.x},${p1.y} Q${mx},${my} ${p2.x},${p2.y}`);
		path.setAttribute('stroke', `url(#${gradId})`);
		path.setAttribute('stroke-width', '6');
		path.setAttribute('fill', 'none');
		path.setAttribute('opacity', '0.8');
		path.setAttribute('filter', 'drop-shadow(0 0 10px rgba(102, 126, 234, 0.5))');
		svg.appendChild(path);

		// Energy flow effect
		const energyPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		energyPath.setAttribute('d', `M${p1.x},${p1.y} Q${mx},${my} ${p2.x},${p2.y}`);
		energyPath.setAttribute('stroke', `url(#${energyGradId})`);
		energyPath.setAttribute('stroke-width', '2');
		energyPath.setAttribute('fill', 'none');
		energyPath.setAttribute('opacity', '0.6');
		energyPath.style.animation = `energy-flow 3s linear infinite`;
		svg.appendChild(energyPath);
	}
}

// Create enhanced orbs with varied sizes and effects
function createEnhancedOrbs(container, positions, baseOrbSize) {
	timelineData.forEach((event, idx) => {
		const orb = document.createElement('div');
		orb.className = 'orb';
		
		// Create varied orb sizes for more visual interest
		const sizeVariation = 0.8 + Math.random() * 0.4; // 80% to 120% of base size
		const currentOrbSize = baseOrbSize * sizeVariation;
		
		orb.style.left = `${positions[idx].x - currentOrbSize / 2}px`;
		orb.style.top = `${positions[idx].y - currentOrbSize / 2}px`;
		orb.style.width = orb.style.height = currentOrbSize + 'px';
		orb.style.zIndex = 10 + idx;
		orb.style.animationDelay = `${0.2 + idx * 0.12}s`;
		
		// Create dynamic gradients with random angles
		const gradientAngle = Math.random() * 360;
		orb.style.background = `linear-gradient(${gradientAngle}deg, ${event.color} 0%, ${event.color}dd 50%, ${event.color}aa 100%)`;
		
		// Add random floating animation
		const animations = ['orb-float-individual', 'orb-drift', 'orb-float'];
		const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
		const animationDuration = 4 + Math.random() * 3; // 4-7 seconds
		const animationDelay = Math.random() * 2; // 0-2 seconds delay
		
		orb.style.animation = `${randomAnimation} ${animationDuration}s ease-in-out infinite`;
		orb.style.animationDelay = `${animationDelay}s`;

		// Create orb content with icon
		const content = document.createElement('div');
		content.className = 'orb-content';
		content.innerHTML = `
			<div style="font-size:${0.7 + Math.random() * 0.2}em;font-weight:700;margin-bottom:2px;">${event.icon}</div>
			<div style="font-size:${0.6 + Math.random() * 0.1}em;font-weight:600;">${event.date}</div>
			<div style="font-size:${0.5 + Math.random() * 0.1}em;font-weight:500;">${event.title}</div>
		`;

		orb.appendChild(content);

		// Enhanced hover effects
		orb.addEventListener('mouseenter', () => {
			orb.style.transform = `scale(1.3) translateZ(20px)`;
			orb.style.boxShadow = `
				0 0 80px ${event.color}aa,
				0 0 160px ${event.color}66,
				0 20px 40px rgba(0,0,0,0.4)
			`;
			
			content.innerHTML = `
				<div style="font-size:1em;font-weight:700;margin-bottom:4px;">${event.icon}</div>
				<div style="font-size:0.9em;font-weight:700;">${event.date}</div>
				<div style="font-size:0.8em;font-weight:600;margin-bottom:6px;">${event.title}</div>
				<div style="font-size:0.7em;font-weight:400;line-height:1.3;">${event.desc}</div>
			`;
			
			// Create particle burst
			createParticleBurst(positions[idx].x, positions[idx].y, event.color);
		});

		orb.addEventListener('mouseleave', () => {
			orb.style.transform = '';
			orb.style.boxShadow = '';
			content.innerHTML = `
				<div style="font-size:0.8em;font-weight:700;margin-bottom:2px;">${event.icon}</div>
				<div style="font-size:0.7em;font-weight:600;">${event.date}</div>
				<div style="font-size:0.6em;font-weight:500;">${event.title}</div>
			`;
		});

		// Click effect - Open memory modal
		orb.addEventListener('click', () => {
			createClickWave(positions[idx].x, positions[idx].y, event.color);
			openMemoryModal(event);
		});

		container.appendChild(orb);
	});
}

// Create particle burst effect
function createParticleBurst(x, y, color) {
	for (let i = 0; i < 15; i++) {
		const particle = new Particle(x, y, color);
		particle.vx = (Math.random() - 0.5) * 8;
		particle.vy = (Math.random() - 0.5) * 8;
		particle.life = 1;
		particle.decay = 0.02;
		particles.push(particle);
	}
}

// Create click wave effect
function createClickWave(x, y, color) {
	const wave = document.createElement('div');
	wave.style.position = 'absolute';
	wave.style.left = x + 'px';
	wave.style.top = y + 'px';
	wave.style.width = '0px';
	wave.style.height = '0px';
	wave.style.border = `2px solid ${color}`;
	wave.style.borderRadius = '50%';
	wave.style.transform = 'translate(-50%, -50%)';
	wave.style.opacity = '1';
	wave.style.pointerEvents = 'none';
	wave.style.zIndex = '1000';
	
	document.body.appendChild(wave);
	
	// Animate wave
	const animation = wave.animate([
		{ width: '0px', height: '0px', opacity: '1' },
		{ width: '200px', height: '200px', opacity: '0' }
	], {
		duration: 1000,
		easing: 'ease-out'
	});
	
	animation.onfinish = () => {
		wave.remove();
	};
}

// Setup enhanced interactions
function setupEnhancedInteractions(container) {
	let mouseTimeout;
	
	container.onmousemove = (e) => {
		isMouseMoving = true;
		const rect = container.getBoundingClientRect();
		mousePosition.x = e.clientX - rect.left;
		mousePosition.y = e.clientY - rect.top;
		
		// Enhanced parallax effect
		document.querySelectorAll('.orb').forEach((orb, i) => {
			const mx = (mousePosition.x / rect.width - 0.5) * 2;
			const my = (mousePosition.y / rect.height - 0.5) * 2;
			const intensity = 1 + (i * 0.1);
			
			orb.style.transform = `
				translate3d(0,0,0) 
				scale(${1 + Math.sin(Date.now() * 0.001 + i) * 0.05}) 
				translate(${mx * 20 * intensity}px, ${my * 20 * intensity}px)
				rotateZ(${mx * 5}deg)
			`;
		});
		
		// Create mouse trail particles
		if (Math.random() < 0.3) {
			const particle = new Particle(mousePosition.x, mousePosition.y, '#ffffff');
			particle.size = Math.random() * 2 + 1;
			particle.life = 0.5;
			particle.decay = 0.01;
			particles.push(particle);
		}
		
		clearTimeout(mouseTimeout);
		mouseTimeout = setTimeout(() => {
			isMouseMoving = false;
			document.querySelectorAll('.orb').forEach((orb) => {
				orb.style.transform = '';
			});
		}, 100);
	};
	
	container.onmouseleave = () => {
		isMouseMoving = false;
		document.querySelectorAll('.orb').forEach((orb) => {
			orb.style.transform = '';
		});
	};
}

// Memory Modal Functions
function openMemoryModal(memoryData) {
	console.log('Opening modal with:', memoryData);
	
	const modal = document.getElementById('memory-modal');
	const photo = document.getElementById('memory-photo');
	const photoDate = document.getElementById('photo-date');
	const photoTitle = document.getElementById('photo-title');
	const letterTitle = document.getElementById('letter-title');
	const letterContent = document.getElementById('letter-content');
	const letterSignature = document.getElementById('letter-signature');
	
	if (!modal) {
		console.error('Modal not found!');
		return;
	}
	
	if (!photo) {
		console.error('Photo element not found!');
		return;
	}
	
	console.log('Setting photo src to:', memoryData.photo);
	
	// Clear any previous image
	photo.src = '';
	
	// Create a new image to test if it loads
	const testImg = new Image();
	testImg.onload = function() {
		console.log('Image loaded successfully:', memoryData.photo);
		// Set the actual photo source
		photo.src = memoryData.photo;
		photo.alt = `${memoryData.title} - ${memoryData.date}`;
		
		// Ensure photo is visible
		photo.style.display = 'block';
		photo.style.opacity = '1';
		photo.style.visibility = 'visible';
		
		console.log('Photo element dimensions:', photo.offsetWidth, 'x', photo.offsetHeight);
	};
	
	testImg.onerror = function() {
		console.error('Failed to load image:', memoryData.photo);
		// Use a guaranteed working placeholder
		const fallbackUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNjY3ZWVhIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5QaG90byBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
		photo.src = fallbackUrl;
		photo.alt = `${memoryData.title} - ${memoryData.date} (Photo not found)`;
		photo.style.display = 'block';
		photo.style.opacity = '1';
		photo.style.visibility = 'visible';
	};
	
	// Start loading the image
	testImg.src = memoryData.photo;
	
	photoDate.textContent = memoryData.date;
	photoTitle.textContent = memoryData.title;
	
	// Set letter
	letterTitle.textContent = memoryData.letter.title;
	letterContent.innerHTML = memoryData.letter.content;
	letterSignature.innerHTML = memoryData.letter.signature;
	
	// Show modal with animation
	modal.style.display = 'flex';
	setTimeout(() => {
		modal.classList.add('show');
	}, 10);
}

function closeMemoryModal() {
	const modal = document.getElementById('memory-modal');
	if (!modal) return;
	
	modal.classList.remove('show');
	setTimeout(() => {
		modal.style.display = 'none';
	}, 300);
}

function setupMemoryModal() {
	const modal = document.getElementById('memory-modal');
	const closeBtn = document.getElementById('close-memory');
	const backdrop = modal.querySelector('.memory-backdrop');
	
	if (!modal || !closeBtn) return;
	
	closeBtn.addEventListener('click', closeMemoryModal);
	backdrop.addEventListener('click', closeMemoryModal);
	
	// Close on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.classList.contains('show')) {
			closeMemoryModal();
		}
	});
}

// Enhanced intro modal setup
function setupIntroModal() {
	const modal = document.getElementById('intro-modal');
	const closeBtn = document.getElementById('close-intro');
	
	if (!modal || !closeBtn) return;
	
	closeBtn.addEventListener('click', () => {
		modal.classList.add('hide');
		
		// Create exit animation particles
		for (let i = 0; i < 30; i++) {
			const particle = new Particle(
				window.innerWidth / 2,
				window.innerHeight / 2,
				'#667eea'
			);
			particle.vx = (Math.random() - 0.5) * 10;
			particle.vy = (Math.random() - 0.5) * 10;
			particles.push(particle);
		}
		
		setTimeout(() => { 
			modal.style.display = 'none'; 
		}, 800);
	});
	
	// Add button hover effects
	closeBtn.addEventListener('mouseenter', () => {
		closeBtn.style.transform = 'translateY(-3px) scale(1.05)';
	});
	
	closeBtn.addEventListener('mouseleave', () => {
		closeBtn.style.transform = '';
	});
}

// Particle animation loop
function animateParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  container.innerHTML = '';
  const numParticles = Math.floor(window.innerWidth / 8);
  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    p.style.animationDelay = (-Math.random() * 8) + 's';
    p.style.opacity = 0.3 + Math.random() * 0.7;
    container.appendChild(p);
  }
}

// Add CSS animations dynamically
function addDynamicStyles() {
	const style = document.createElement('style');
	style.textContent = `
		@keyframes energy-flow {
			0% { stroke-dasharray: 0 1000; }
			100% { stroke-dasharray: 1000 0; }
		}
		
		.orb {
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		}
		
		.orb:hover {
			animation-play-state: paused;
		}
	`;
	document.head.appendChild(style);
}

// Initialize everything
function init() {
	createFloatingParticles();
	render3DTimeline();
	setupIntroModal();
	addDynamicStyles();
	animateParticles();
	
	// Handle window resize
	window.addEventListener('resize', () => {
		clearTimeout(window.resizeTimeout);
		window.resizeTimeout = setTimeout(render3DTimeline, 250);
	});
	
	// Add scroll indicator animation
	const scrollIndicator = document.querySelector('.scroll-indicator');
	if (scrollIndicator) {
		setTimeout(() => {
			scrollIndicator.style.opacity = '0';
		}, 5000);
	}
}

// Show loading screen function
function showLoadingScreen() {
	const loadingScreen = document.getElementById('loading-screen');
	if (!loadingScreen) return;
	
	// Hide loading screen after 2 seconds and show intro modal
	setTimeout(() => {
		loadingScreen.classList.add('hide');
		setTimeout(() => {
			loadingScreen.style.display = 'none';
		}, 500);
	}, 2000);
}

// Initialize everything properly
function init() {
	createFloatingParticles();
	render3DTimeline();
	setupIntroModal();
	setupMemoryModal();
	addDynamicStyles();
	animateParticles();
	
	// Handle window resize
	window.addEventListener('resize', () => {
		clearTimeout(window.resizeTimeout);
		window.resizeTimeout = setTimeout(() => {
			animateParticles();
			render3DTimeline();
		}, 250);
	});
}

// Start the epic timeline
window.addEventListener('DOMContentLoaded', () => {
	showLoadingScreen();
	
	// Initialize everything after loading screen
	setTimeout(() => {
		init();
	}, 2500);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId);
	}
});
