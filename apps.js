const Evocards = [
    {
        name: "Knight",
        Hp: "2119",
        Dps: "244",
        Targets: "Ground",
        Buffs: ['60% dmg reduction', '25% attack speed increase'],
    },
    {
        name: "Firecracker",
        Hp: "432",
        Dps: "244",
        Targets: "Air & Ground",
        Buffs: ['68 crown tower dps', 'aoe+dot'],
    },    {
        name: "Mortar",
        Hp: "1495",
        Dps: "60.5",
        Targets: "Ground",
        Buffs: ['25% attack speed increase', 'spawns goblins'],
    },
    {
        name: "Skeltons",
        Hp: "74",
        Dps: "74",
        Targets: "Ground",
        Buffs: ['Multiplying mechanic', 'Spawn count increased by 1'],
    }
]
Evocards.forEach((Evocards) => {
    console.log(Evocards.name)
    console.log(Evocards.Hp)
    console.log(Evocards.Dps)
    console.log(Evocards.Targets)
    Evocards.Buffs.forEach((Buffs) => {
        console.log(Buffs);
    });
});
